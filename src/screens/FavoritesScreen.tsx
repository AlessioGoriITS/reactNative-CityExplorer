import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { useColors } from '../context/ThemeContext';

export default function FavoritesScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Favorites'>) {
  const c = useColors();
  return <View style={{ flex: 1, backgroundColor: c.background, padding: 28, justifyContent: 'center', alignItems: 'center', gap: 18 }}>
    <View style={{ width: 96, height: 96, borderRadius: 32, backgroundColor: c.tint, justifyContent: 'center', alignItems: 'center' }}><Icon source="heart-outline" size={42} color={c.primary} /></View>
    <Text accessibilityRole="header" style={{ fontSize: 26, fontWeight: '700', color: c.text, textAlign: 'center' }}>I luoghi da ricordare</Text>
    <Text style={{ color: c.muted, textAlign: 'center', lineHeight: 24, fontSize: 15 }}>La raccolta dei preferiti sarà disponibile in un prossimo aggiornamento. Nel frattempo, lasciati ispirare dai luoghi di Lucca.</Text>
    <Button mode="contained" icon="compass-outline" onPress={() => navigation.navigate('Home')} contentStyle={{ minHeight: 50 }} style={{ borderRadius: 16, marginTop: 8 }}>Esplora Lucca</Button>
  </View>;
}
