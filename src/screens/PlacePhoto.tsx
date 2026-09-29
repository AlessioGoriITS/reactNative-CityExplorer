import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Icon, Text } from 'react-native-paper';
import { placePhotos } from '../data/placePhotos';
import { useColors } from '../context/ThemeContext';

export default function PlacePhoto({ id }: { id: string }) {
  const photo = placePhotos[id];
  const c = useColors();
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  if (!photo) return null;
  return <View style={{ width: '100%', aspectRatio: 16 / 10, backgroundColor: c.tint, overflow: 'hidden' }}>
    <Image source={{ uri: photo.uri }} accessibilityLabel={photo.alt} resizeMode="cover"
      style={StyleSheet.absoluteFill} onLoad={() => setStatus('ready')} onError={() => setStatus('error')} />
    {status !== 'ready' && <View style={[StyleSheet.absoluteFill, { backgroundColor: c.tint, alignItems: 'center', justifyContent: 'center', gap: 10 }]}>
      {status === 'loading' ? <ActivityIndicator accessibilityLabel="Caricamento foto" /> : <><Icon source="image-off-outline" size={28} color={c.muted} /><Text style={{ color: c.muted }}>Foto non disponibile</Text></>}
    </View>}
  </View>;
}
