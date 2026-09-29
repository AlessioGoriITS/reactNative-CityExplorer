import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MapScreen from './src/screens/MapScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { placeId: string };
  Favorites: undefined;
  Settings: undefined;
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  const { isDark } = useTheme();
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack.Navigator screenOptions={{ headerTitleStyle: { fontWeight: '700' } }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CityExplorer' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Dettagli' }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Preferiti' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Impostazioni' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Mappa di Lucca' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <ThemeProvider><ThemedApp /></ThemeProvider>;
}

function ThemedApp() {
  const { isDark } = useTheme();
  return <PaperProvider theme={isDark ? MD3DarkTheme : MD3LightTheme}><AppNavigation /></PaperProvider>;
}
