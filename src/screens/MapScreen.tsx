import React, { useState } from 'react';
import { ImageBackground, Modal, Pressable, StyleSheet, View } from 'react-native';
import { Button, Card, Text as PaperText } from 'react-native-paper';
import { places, Place } from '../data/places';

const mapUrl = 'https://www.informagiovani-italia.com/mappa-lucca2.jpg';
const pinPositions: Record<string, { top: `${number}%`; left: `${number}%` }> = {
  '1': { top: '48%', left: '24%' },
  '2': { top: '43%', left: '53%' },
  '3': { top: '35%', left: '68%' },
  '4': { top: '49%', left: '57%' },
  '5': { top: '60%', left: '48%' }
};

export default function MapScreen() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  return <View style={styles.container}>
    <PaperText variant="titleLarge" style={styles.heading}>Esplora Lucca sulla mappa</PaperText>
    <PaperText variant="bodyMedium" style={styles.hint}>Tocca un pin per scoprire l’attrazione.</PaperText>
    <View style={styles.mapFrame}>
      <ImageBackground source={{ uri: mapUrl }} resizeMode="cover" style={styles.mapImage} imageStyle={styles.mapImageRadius}>
        {places.map((place) => <Pressable key={place.id} accessibilityLabel={`Apri ${place.name}`} style={[styles.pin, pinPositions[place.id]]} onPress={() => setSelectedPlace(place)}><PaperText style={styles.pinText}>📍</PaperText></Pressable>)}
      </ImageBackground>
    </View>
    <Modal visible={selectedPlace !== null} transparent animationType="fade" onRequestClose={() => setSelectedPlace(null)}>
      <View style={styles.modalBackdrop}><Card style={styles.popup}><Card.Title title={selectedPlace?.name} subtitle={`${selectedPlace?.city} · ${selectedPlace?.category}`} /><Card.Content><PaperText variant="bodyLarge">{selectedPlace?.description}</PaperText></Card.Content><Card.Actions><Button onPress={() => setSelectedPlace(null)}>Chiudi</Button></Card.Actions></Card></View>
    </Modal>
  </View>;
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16, backgroundColor: '#F8FAFC' }, heading: { fontWeight: '700' }, hint: { color: '#64748B', marginTop: 4, marginBottom: 14 }, mapFrame: { overflow: 'hidden', borderRadius: 18, elevation: 3 }, mapImage: { width: '100%', height: 560, backgroundColor: '#E2E8F0' }, mapImageRadius: { borderRadius: 18 }, pin: { position: 'absolute', padding: 4, marginLeft: -15, marginTop: -26 }, pinText: { fontSize: 28, textShadowColor: '#FFF', textShadowRadius: 3 }, modalBackdrop: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: 'rgba(15, 23, 42, 0.55)' }, popup: { borderRadius: 18 }
});
