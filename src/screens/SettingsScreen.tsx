import React from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Switch, Text } from 'react-native-paper';
import { useTheme, useColors } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useTheme();
  const c = useColors();
  return <ScrollView style={{ backgroundColor: c.background }} contentContainerStyle={{ padding: 24, gap: 22 }}>
    <Text accessibilityRole="header" style={{ color: c.text, fontSize: 30, fontWeight: '700', letterSpacing: -0.5 }}>A modo tuo.</Text>
    <Text style={{ color: c.muted, fontSize: 15, lineHeight: 23 }}>Scegli l'atmosfera per la tua prossima passeggiata.</Text>
    <Text style={{ color: c.primary, fontSize: 11, letterSpacing: 1.6, fontWeight: '700', marginTop: 10 }}>ASPETTO</Text>
    <View style={{ backgroundColor: c.surface, padding: 20, borderWidth: 1, borderColor: c.border, borderRadius: 20, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
      <Icon source={isDark ? 'weather-night' : 'white-balance-sunny'} color={c.primary} size={26} />
      <View style={{ flex: 1, gap: 5 }}><Text style={{ fontSize: 16, color: c.text, fontWeight: '600' }}>Tema scuro</Text><Text style={{ fontSize: 13, color: c.muted }}>{isDark ? 'Colori morbidi per la sera' : 'La luce naturale della città'}</Text></View>
      <Switch value={isDark} onValueChange={toggleTheme} accessibilityLabel="Tema scuro" />
    </View>
    <View style={{ backgroundColor: c.tint, padding: 24, borderRadius: 20, gap: 10, marginTop: 12 }}>
      <Icon source="compass-outline" size={30} color={c.primary} />
      <Text style={{ fontSize: 19, fontWeight: '700', color: c.text }}>CityExplorer</Text>
      <Text style={{ fontSize: 14, lineHeight: 22, color: c.muted }}>Una città, tante storie. La tua guida per scoprire Lucca, un luogo alla volta.</Text>
      <Text style={{ fontSize: 12, color: c.muted, marginTop: 8 }}>Edizione Lucca · Versione 1.0.0</Text>
    </View>
  </ScrollView>;
}
