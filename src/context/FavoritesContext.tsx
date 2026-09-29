import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { places } from '../data/places';

const KEY = 'cityexplorer.favorites.v1';
type Favorites = { ids: string[]; ready: boolean; saving: boolean; toggle: (id: string) => Promise<void> };
const Context = createContext<Favorites | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);
  const busy = useRef(false);
  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(KEY).then(raw => {
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) throw new Error('Invalid saved favorites');
      const valid = [...new Set(parsed.filter((id): id is string => typeof id === 'string' && places.some(p => p.id === id)))];
      if (active) setIds(valid);
    }).catch(() => {
      if (active) Alert.alert('Preferiti non disponibili', 'Non è stato possibile leggere la raccolta salvata. Puoi ricrearla aggiungendo i luoghi.');
    }).finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);
  async function toggle(id: string) {
    if (!ready || busy.current || !places.some(p => p.id === id)) return;
    busy.current = true;
    setSaving(true);
    const next = ids.includes(id) ? ids.filter(value => value !== id) : [...ids, id];
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(next));
      setIds(next);
    } catch {
      Alert.alert('Salvataggio non riuscito', 'La raccolta non è stata modificata. Riprova.');
    } finally {
      busy.current = false;
      setSaving(false);
    }
  }
  return <Context.Provider value={{ ids, ready, saving, toggle }}>{children}</Context.Provider>;
}
export function useFavorites() {
  const context = useContext(Context);
  if (!context) throw new Error('FavoritesProvider missing');
  return context;
}
