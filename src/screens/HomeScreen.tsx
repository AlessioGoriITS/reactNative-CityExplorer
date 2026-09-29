import React, { useEffect, useState } from 'react';
import { Image, FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Icon, Searchbar, Text, TouchableRipple } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { places } from '../data/places';
import { useColors } from '../context/ThemeContext';
import PlacePhoto from './PlacePhoto';

const mapUrl = 'https://www.informagiovani-italia.com/mappa-lucca2.jpg';
export function placeIcon(category: string) {
  if (/Musei|Cultura|Scienza/.test(category)) return 'bank-outline';
  if (/Arte|sacra/.test(category)) return 'church';
  if (/Natura|Giardini|Passeggiate/.test(category)) return 'leaf';
  if (/Panorama/.test(category)) return 'binoculars';
  return 'map-marker-outline';
}

export default function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [mapState, setMapState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => { setMapState('loading'); }, [attempt]);
  const normalized = query.trim().toLocaleLowerCase('it');
  const filtered = places.filter(p => `${p.name} ${p.category}`.toLocaleLowerCase('it').includes(normalized));
  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <FlatList
        data={filtered}
        keyExtractor={p => p.id}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.content}
        ListHeaderComponent={<>
          <Text style={[styles.eyebrow, { color: c.primary }]}>LA TUA GUIDA DI CITTÀ</Text>
          <Text accessibilityRole="header" style={[styles.title, { color: c.text }]}>Lucca, da scoprire.</Text>
          <Text style={[styles.intro, { color: c.muted }]}>Tra le mura, ogni strada ha una storia.</Text>
          <View style={[styles.mapCard, { backgroundColor: c.surface, borderColor: c.border }]}>
            <View style={styles.map}>
              <Image key={attempt} source={{ uri: mapUrl }} resizeMode="contain" style={StyleSheet.absoluteFill} accessibilityLabel="Mappa illustrata del centro di Lucca"
                onLoad={() => setMapState('ready')} onError={() => setMapState('error')} />
              {mapState !== 'ready' && <View style={[styles.mapOverlay, { backgroundColor: c.tint }]}>
                {mapState === 'loading' ? <><ActivityIndicator /><Text style={{ color: c.muted }}>Caricamento mappa…</Text></> :
                  <><Icon source="map-outline" size={30} color={c.primary} /><Text style={{ color: c.muted }}>Mappa non disponibile</Text><Button onPress={() => { setMapState('loading'); setAttempt(a => a + 1); }}>Riprova</Button></>}
              </View>}
            </View>
            <View style={styles.mapCaption}><Icon source="map-outline" size={18} color={c.primary} /><Text style={{ color: c.muted, fontSize: 12 }}>Il centro storico · Lucca</Text></View>
          </View>
          <View style={styles.section}>
            <Text accessibilityRole="header" style={[styles.sectionTitle, { color: c.text }]}>Lasciati ispirare</Text>
            <Text style={{ color: c.muted }}>{filtered.length} luoghi</Text>
          </View>
          <Searchbar value={query} onChangeText={setQuery} placeholder="Cerca luoghi o categorie" accessibilityLabel="Cerca attrazioni" style={[styles.search, { backgroundColor: c.surface, borderColor: c.border }]} inputStyle={{ fontSize: 15 }} />
        </>}
        renderItem={({ item, index }) => <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>
          <TouchableRipple onPress={() => navigation.navigate('Details', { placeId: item.id })} accessibilityRole="button" accessibilityLabel={`Apri ${item.name}`}>
            <View>
            <PlacePhoto key={item.id} id={item.id} />
            <View style={styles.cardBody}>
              <View style={styles.cardTop}>
                <View style={[styles.iconTile, { backgroundColor: c.tint }]}><Icon source={placeIcon(item.category)} size={25} color={c.primary} /></View>
                <Text style={[styles.category, { color: c.primary }]}>{item.category}</Text>
                <Text style={{ color: c.muted, fontSize: 12 }}>{String(index + 1).padStart(2, '0')}</Text>
              </View>
              <Text style={[styles.cardTitle, { color: c.text }]}>{item.name}</Text>
              <Text numberOfLines={2} style={[styles.description, { color: c.muted }]}>{item.description}</Text>
              <View style={[styles.cardFooter, { borderTopColor: c.border }]}><Text style={{ color: c.primary, fontSize: 13, fontWeight: '600' }}>Scopri il luogo</Text><Icon source="arrow-right" size={19} color={c.primary} /></View>
            </View>
            </View>
          </TouchableRipple>
        </View>}
        ListEmptyComponent={<View style={styles.empty}><Icon source="map-search-outline" size={42} color={c.primary} /><Text variant="titleMedium">Nessun luogo trovato</Text><Text style={{ color: c.muted, textAlign: 'center' }}>Prova un altro nome o una categoria.</Text><Button onPress={() => setQuery('')}>Mostra tutti i luoghi</Button></View>}
      />
      <View style={[styles.navigation, { backgroundColor: c.surface, borderTopColor: c.border, paddingBottom: Math.max(insets.bottom, 8) }]}>
        <Button icon="compass-outline" mode="contained-tonal" accessibilityLabel="Esplora, pagina attuale">Esplora</Button>
        <Button icon="heart-outline" onPress={() => navigation.navigate('Favorites')} compact>Preferiti</Button>
        <Button icon="cog-outline" onPress={() => navigation.navigate('Settings')} compact>Opzioni</Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 28 },
  eyebrow: { fontSize: 11, letterSpacing: 2, fontWeight: '700', marginBottom: 10 },
  title: { fontSize: 34, lineHeight: 42, fontWeight: '700', letterSpacing: -1 },
  intro: { fontSize: 15, lineHeight: 23, marginTop: 8, marginBottom: 24 },
  mapCard: { borderRadius: 20, borderWidth: 1, overflow: 'hidden' },
  map: { width: '100%', aspectRatio: 1606 / 1238 },
  mapOverlay: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', gap: 10 },
  mapCaption: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 14 },
  section: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginBottom: 16, gap: 10 },
  sectionTitle: { fontSize: 22, fontWeight: '700', flexShrink: 1 },
  search: { borderRadius: 16, borderWidth: 1, marginBottom: 20 },
  card: { borderWidth: 1, borderRadius: 20, overflow: 'hidden', marginBottom: 14 },
  cardBody: { padding: 20 },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  iconTile: { width: 46, height: 46, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  category: { flex: 1, fontSize: 12, fontWeight: '600' },
  cardTitle: { fontSize: 21, lineHeight: 28, fontWeight: '700', letterSpacing: -0.3 },
  description: { fontSize: 14, lineHeight: 22, marginTop: 8 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: StyleSheet.hairlineWidth, marginTop: 18, paddingTop: 14 },
  navigation: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 8, paddingHorizontal: 4 },
  empty: { padding: 24, alignItems: 'center', gap: 12 },
});
