import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
export const palette = {
  light: { background: '#F8F6F1', surface: '#FFFFFF', text: '#203C35', muted: '#65736B', primary: '#28634F', tint: '#E8EFE7', border: '#DEE4DA' },
  dark: { background: '#14211D', surface: '#1E3028', text: '#EFF4EB', muted: '#B2C2B7', primary: '#A3D5B4', tint: '#304B3B', border: '#3C5044' },
};
export function useColors() { const { isDark } = useTheme(); return isDark ? palette.dark : palette.light; }
type ThemeContextValue = { isDark: boolean; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) { const [isDark, setIsDark] = useState(useColorScheme() === 'dark'); const value = useMemo(() => ({ isDark, toggleTheme: () => setIsDark((current) => !current) }), [isDark]); return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>; }
export function useTheme() { const context = useContext(ThemeContext); if (!context) throw new Error('useTheme deve essere usato dentro ThemeProvider'); return context; }
