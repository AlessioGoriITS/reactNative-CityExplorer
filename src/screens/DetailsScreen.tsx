import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { places } from '../data/places';
import { useColors } from '../context/ThemeContext';
import { placeIcon } from './HomeScreen';

export default function DetailsScreen({ route }: NativeStackScreenProps<RootStackParamList, 'Details'>) {
  const place = places.find(p => p.id === route.params.placeId);
  const [favorite, setFavorite] = useState(false);
  const c = useColors();
  const insets = useSafeAreaInsets();
  if (!place) return <View style={styles.content}><Text>Questo luogo non è disponibile.</Text></View>;
  return <ScrollView style={{ backgroundColor: c.background }} contentContainerStyle={[styles.content, { paddingBottom: 24 + insets.bottom }]}>
    <View style={[styles.hero, { backgroundColor: c.tint }]}>
      <View style={[styles.symbol, { borderColor: c.primary }]}><Icon source={placeIcon(place.category)} size={62} color={c.primary} /></View>
      <Text style={[styles.heroLabel, { color: c.primary }]}>LUCCA · CITYEXPLORER</Text>
    </View>
    <Text style={[styles.category, { color: c.primary }]}>{place.category.toLocaleUpperCase('it')}</Text>
    <Text accessibilityRole="header" style={[styles.title, { color: c.text }]}>{place.name}</Text>
    <View style={styles.location}><Icon source="map-marker-outline" size={18} color={c.muted} /><Text style={{ color: c.muted }}>Lucca, Toscana</Text></View>
    <View style={[styles.panel, { backgroundColor: c.surface, borderColor: c.border }]}>
      <Text style={[styles.heading, { color: c.text }]}>Il luogo, la sua storia</Text>
      <Text style={[styles.description, { color: c.muted }]}>{place.description}</Text>
    </View>
    <Button icon={favorite ? 'heart' : 'heart-outline'} mode={favorite ? 'contained-tonal' : 'contained'} onPress={() => setFavorite(v => !v)} contentStyle={{ minHeight: 52 }} style={{ borderRadius: 16 }}>{favorite ? 'Selezionato' : 'Mi piace questo luogo'}</Button>
    <Text style={[styles.note, { color: c.muted }]}>La selezione resta attiva mentre questa scheda è aperta.</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({
  content: { padding: 24 },
  hero: { height: 208, borderRadius: 24, alignItems: 'center', justifyContent: 'center', gap: 18 },
  symbol: { width: 104, height: 104, borderRadius: 52, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  heroLabel: { fontSize: 10, letterSpacing: 2, fontWeight: '700' },
  category: { marginTop: 28, fontSize: 11, letterSpacing: 1.5, fontWeight: '700' },
  title: { fontSize: 32, lineHeight: 39, fontWeight: '700', letterSpacing: -0.6, marginTop: 10 },
  location: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12 },
  panel: { marginVertical: 28, borderWidth: 1, padding: 22, borderRadius: 20 },
  heading: { fontWeight: '700', fontSize: 17, marginBottom: 12 },
  description: { fontSize: 16, lineHeight: 27 },
  note: { textAlign: 'center', fontSize: 12, lineHeight: 18, marginTop: 12 },
});
