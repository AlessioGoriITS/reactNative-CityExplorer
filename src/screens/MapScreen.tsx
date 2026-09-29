import React, { useState } from 'react';
import { ImageBackground, Modal, Pressable, StyleSheet, View } from 'react-native';
import { Button, Card, Text as PaperText } from 'react-native-paper';
import { places, Place } from '../data/places';

const mapUrl = 'https://www.informagiovani-italia.com/mappa-lucca2.jpg';
const mapAspectRatio = 1606 / 1238;
const pinPositions: Record<string, { top: `${number}%`; left: `${number}%` }> = {
  // Coordinate approximate riferite alla mappa completa, mantenuta in proporzione.
  '1': { top: '26%', left: '50%' }, // Mura, tratto settentrionale
  '2': { top: '45%', left: '40%' }, // Piazza dell'Anfiteatro
  '3': { top: '43%', left: '57%' }, // Torre Guinigi
  '4': { top: '61%', left: '39%' }, // Duomo di San Martino
  '5': { top: '56%', left: '31%' } // Casa Natale di Puccini
};

export default function MapScreen() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  return <View style={styles.container}>
    <PaperText variant="titleLarge" style={styles.heading}>Esplora Lucca sulla mappa</PaperText>
    <PaperText variant="bodyMedium" style={styles.hint}>Tocca un pin per scoprire l’attrazione.</PaperText>
    <View style={[styles.mapFrame, { aspectRatio: mapAspectRatio }]}>
      <ImageBackground source={{ uri: mapUrl }} resizeMode="contain" style={styles.mapImage} imageStyle={styles.mapImageRadius}>
        {places.map((place) => <Pressable key={place.id} accessibilityLabel={`Apri ${place.name}`} style={[styles.pin, pinPositions[place.id]]} onPress={() => setSelectedPlace(place)}><PaperText style={styles.pinText}>📍</PaperText></Pressable>)}
      </ImageBackground>
    </View>
    <Modal visible={selectedPlace !== null} transparent animationType="fade" onRequestClose={() => setSelectedPlace(null)}>
      <View style={styles.modalBackdrop}><Card style={styles.popup}><Card.Title title={selectedPlace?.name} subtitle={`${selectedPlace?.city} · ${selectedPlace?.category}`} /><Card.Content><PaperText variant="bodyLarge">{selectedPlace?.description}</PaperText></Card.Content><Card.Actions><Button onPress={() => setSelectedPlace(null)}>Chiudi</Button></Card.Actions></Card></View>
    </Modal>
  </View>;
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16, backgroundColor: '#F8FAFC' }, heading: { fontWeight: '700' }, hint: { color: '#64748B', marginTop: 4, marginBottom: 14 }, mapFrame: { width: '100%', overflow: 'hidden', borderRadius: 18, elevation: 3 }, mapImage: { width: '100%', height: '100%', backgroundColor: '#E2E8F0' }, mapImageRadius: { borderRadius: 18 }, pin: { position: 'absolute', padding: 4, marginLeft: -15, marginTop: -26 }, pinText: { fontSize: 28, textShadowColor: '#FFF', textShadowRadius: 3 }, modalBackdrop: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: 'rgba(15, 23, 42, 0.55)' }, popup: { borderRadius: 18 }
});
