import React from 'react';
import { FlatList, View } from 'react-native';
import { ActivityIndicator, Button, Card, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { useColors } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { places } from '../data/places';
import PlacePhoto from './PlacePhoto';

export default function FavoritesScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Favorites'>) {
  const c = useColors();
  const { ids, ready, saving, toggle } = useFavorites();
  const insets = useSafeAreaInsets();
  if (!ready) return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator accessibilityLabel="Caricamento preferiti" /></View>;
  return <FlatList style={{ backgroundColor: c.background }} contentContainerStyle={{ padding: 20, paddingBottom: 20 + insets.bottom }}
    data={places.filter(p => ids.includes(p.id))} keyExtractor={p => p.id}
    ListHeaderComponent={<Text accessibilityRole="header" style={{ color: c.text, fontSize: 26, fontWeight: '700', marginBottom: 22 }}>I tuoi luoghi del cuore</Text>}
    renderItem={({ item }) => <Card mode="outlined" style={{ marginBottom: 18, backgroundColor: c.surface, borderRadius: 20, overflow: 'hidden' }} onPress={() => navigation.navigate('Details', { placeId: item.id })}>
      <PlacePhoto id={item.id} />
      <Card.Title title={item.name} titleNumberOfLines={3} subtitle={item.category} />
      <Card.Actions>
        <Button accessibilityLabel={`Rimuovi ${item.name} dai preferiti`} disabled={saving} onPress={() => toggle(item.id)}>Rimuovi</Button>
        <Button onPress={() => navigation.navigate('Details', { placeId: item.id })}>Scopri</Button>
      </Card.Actions>
    </Card>}
    ListEmptyComponent={<View style={{ alignItems: 'center', paddingVertical: 60, gap: 18 }}>
      <Text variant="titleLarge">La prossima tappa la scegli tu</Text>
      <Text style={{ color: c.muted, textAlign: 'center', lineHeight: 24 }}>Apri un'attrazione e tocca “Salva nei preferiti” per ritrovarla qui, anche dopo aver chiuso l'app.</Text>
      <Button mode="contained" icon="compass-outline" onPress={() => navigation.navigate('Home')}>Esplora Lucca</Button>
    </View>} />;
}
