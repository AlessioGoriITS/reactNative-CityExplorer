import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { ThemeProvider, useTheme, useColors } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { placeId: string };
  Favorites: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  const { isDark } = useTheme();
  const colors = useColors();
  return (
    <NavigationContainer theme={{ ...(isDark ? DarkTheme : DefaultTheme), colors: { ...(isDark ? DarkTheme : DefaultTheme).colors, background: colors.background, card: colors.background, text: colors.text, primary: colors.primary, border: colors.border } }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack.Navigator screenOptions={{ headerTitleStyle: { fontWeight: '700', fontSize: 17 }, headerShadowVisible: false, headerTintColor: colors.text, contentStyle: { backgroundColor: colors.background } }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CityExplorer · Lucca' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Dettagli' }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Preferiti' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Impostazioni' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <ThemeProvider><ThemedApp /></ThemeProvider>;
}

function ThemedApp() {
  const { isDark } = useTheme();
  const colors = useColors();
  const base = isDark ? MD3DarkTheme : MD3LightTheme;
  return <PaperProvider theme={{ ...base, roundness: 5, colors: { ...base.colors, primary: colors.primary, onPrimary: isDark ? '#14211D' : '#FFFFFF', background: colors.background, surface: colors.surface, onSurface: colors.text, onSurfaceVariant: colors.muted, surfaceVariant: colors.tint, outline: colors.border, secondaryContainer: colors.tint, onSecondaryContainer: colors.text } }}><AppNavigation /></PaperProvider>;
}
