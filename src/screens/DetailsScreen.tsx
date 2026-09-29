import React, { useState } from 'react';
import { Alert, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { places } from '../data/places';
import { officialLinks } from '../data/officialLinks';
import { placePhotos } from '../data/placePhotos';
import PlacePhoto from './PlacePhoto';
import { useColors } from '../context/ThemeContext';
import { placeIcon } from './HomeScreen';

export default function DetailsScreen({ route }: NativeStackScreenProps<RootStackParamList, 'Details'>) {
  const place = places.find(p => p.id === route.params.placeId);
  const [favorite, setFavorite] = useState(false);
  const [openingLink, setOpeningLink] = useState(false);
  const officialLink = place ? officialLinks[place.id] : undefined;
  async function openLink(url?: string) {
    if (!url || openingLink) return;
    setOpeningLink(true);
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Link non aperto', 'Non è stato possibile aprire il sito. Riprova tra poco.');
    } finally {
      setOpeningLink(false);
    }
  }
  const c = useColors();
  const insets = useSafeAreaInsets();
  if (!place) return <View style={styles.content}><Text>Questo luogo non è disponibile.</Text></View>;
  return <ScrollView style={{ backgroundColor: c.background }} contentContainerStyle={[styles.content, { paddingBottom: 24 + insets.bottom }]}>
    {placePhotos[place.id] ? <View>
      <View style={{ borderRadius: 24, overflow: 'hidden' }}><PlacePhoto key={place.id} id={place.id} /></View>
      <Button icon="open-in-new" onPress={() => openLink(placePhotos[place.id]?.sourceUrl)} disabled={openingLink} accessibilityRole="link"
        accessibilityLabel="Apri la fonte e i crediti della fotografia" labelStyle={{ fontSize: 12 }}
        contentStyle={{ minHeight: 44 }}>Fonte della fotografia</Button>
      <Text style={{ color: c.muted, fontSize: 12, textAlign: 'center', lineHeight: 18 }}>{placePhotos[place.id]?.credit}</Text>
    </View> : <View style={[styles.hero, { backgroundColor: c.tint }]}>
      <View style={[styles.symbol, { borderColor: c.primary }]}><Icon source={placeIcon(place.category)} size={62} color={c.primary} /></View>
      <Text style={[styles.heroLabel, { color: c.primary }]}>LUCCA · CITYEXPLORER</Text>
    </View>}
    <Text style={[styles.category, { color: c.primary }]}>{place.category.toLocaleUpperCase('it')}</Text>
    <Text accessibilityRole="header" style={[styles.title, { color: c.text }]}>{place.name}</Text>
    <View style={styles.location}><Icon source="map-marker-outline" size={18} color={c.muted} /><Text style={{ color: c.muted }}>Lucca, Toscana</Text></View>
    <View style={[styles.panel, { backgroundColor: c.surface, borderColor: c.border }]}>
      <Text style={[styles.heading, { color: c.text }]}>Il luogo, la sua storia</Text>
      <Text style={[styles.description, { color: c.muted }]}>{place.description}</Text>
      {officialLink && <View style={[styles.official, { borderTopColor: c.border }]}>
        <Text style={[styles.heading, { color: c.text }]}>Informazioni ufficiali</Text>
        <Text style={{ color: c.muted, fontSize: 13, lineHeight: 20, marginBottom: 12 }}>
          {officialLink.publisher}{officialLink.isPdf ? ' · Guida delle Mura in PDF' : ' · Approfondisci il luogo'}
        </Text>
        <Button icon="open-in-new" mode="outlined" onPress={() => openLink(officialLink.url)} loading={openingLink} disabled={openingLink}
          accessibilityRole="link" accessibilityLabel={`Apri ${officialLink.publisher}${officialLink.isPdf ? ', documento PDF' : ''} nel browser`}
          contentStyle={{ minHeight: 48 }} style={{ borderRadius: 14 }}>
          {officialLink.isPdf ? 'Apri guida PDF' : 'Visita il sito ufficiale'}
        </Button>
      </View>}
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
  official: { borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 20, marginTop: 24 },
  description: { fontSize: 16, lineHeight: 27 },
  note: { textAlign: 'center', fontSize: 12, lineHeight: 18, marginTop: 12 },
});
