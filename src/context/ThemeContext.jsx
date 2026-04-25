import { createContext, useContext, useState, useEffect } from 'react'

export const themes = {
  purple: {
    name: 'Purple',
    emoji: '💜',
    dark: {
      '--bg': '#0a0a0f',
      '--surface': '#12121a',
      '--surface2': '#1a1a26',
      '--card': '#16161f',
      '--accent': '#7c6cfa',
      '--accent2': '#fa6c9a',
      '--accent3': '#6cfabd',
      '--text': '#f0eeff',
      '--muted': '#7a7a9a',
      '--border': 'rgba(124,108,250,0.18)',
      '--orb1': '#7c6cfa',
      '--orb2': '#fa6c9a',
      '--orb3': '#6cfabd',
    },
    light: {
      '--bg': '#f5f4ff',
      '--surface': '#ede9ff',
      '--surface2': '#e2dcff',
      '--card': '#ffffff',
      '--accent': '#5b4de8',
      '--accent2': '#e0457a',
      '--accent3': '#1aaa6e',
      '--text': '#1a1030',
      '--muted': '#7060b0',
      '--border': 'rgba(91,77,232,0.18)',
      '--orb1': '#7c6cfa',
      '--orb2': '#fa6c9a',
      '--orb3': '#6cfabd',
    },
  },
  ocean: {
    name: 'Ocean',
    emoji: '🌊',
    dark: {
      '--bg': '#070d1a',
      '--surface': '#0d1829',
      '--surface2': '#122035',
      '--card': '#0f1c30',
      '--accent': '#38bdf8',
      '--accent2': '#818cf8',
      '--accent3': '#34d399',
      '--text': '#e0f2fe',
      '--muted': '#64788a',
      '--border': 'rgba(56,189,248,0.18)',
      '--orb1': '#38bdf8',
      '--orb2': '#818cf8',
      '--orb3': '#34d399',
    },
    light: {
      '--bg': '#f0f9ff',
      '--surface': '#e0f2fe',
      '--surface2': '#bae6fd',
      '--card': '#ffffff',
      '--accent': '#0369a1',
      '--accent2': '#4f46e5',
      '--accent3': '#059669',
      '--text': '#0c2a3d',
      '--muted': '#4a7a96',
      '--border': 'rgba(3,105,161,0.18)',
      '--orb1': '#38bdf8',
      '--orb2': '#818cf8',
      '--orb3': '#34d399',
    },
  },
  rose: {
    name: 'Rose',
    emoji: '🌸',
    dark: {
      '--bg': '#120810',
      '--surface': '#1e0e1a',
      '--surface2': '#281522',
      '--card': '#1c0e18',
      '--accent': '#f472b6',
      '--accent2': '#fb923c',
      '--accent3': '#a78bfa',
      '--text': '#fce7f3',
      '--muted': '#8a6070',
      '--border': 'rgba(244,114,182,0.18)',
      '--orb1': '#f472b6',
      '--orb2': '#fb923c',
      '--orb3': '#a78bfa',
    },
    light: {
      '--bg': '#fff1f7',
      '--surface': '#ffe4ef',
      '--surface2': '#fecdd3',
      '--card': '#ffffff',
      '--accent': '#be185d',
      '--accent2': '#c2410c',
      '--accent3': '#7c3aed',
      '--text': '#3b0a20',
      '--muted': '#8a4060',
      '--border': 'rgba(190,24,93,0.18)',
      '--orb1': '#f472b6',
      '--orb2': '#fb923c',
      '--orb3': '#a78bfa',
    },
  },
  forest: {
    name: 'Forest',
    emoji: '🌿',
    dark: {
      '--bg': '#060f09',
      '--surface': '#0d1c11',
      '--surface2': '#122618',
      '--card': '#0f1f14',
      '--accent': '#4ade80',
      '--accent2': '#facc15',
      '--accent3': '#38bdf8',
      '--text': '#dcfce7',
      '--muted': '#527a5a',
      '--border': 'rgba(74,222,128,0.18)',
      '--orb1': '#4ade80',
      '--orb2': '#facc15',
      '--orb3': '#38bdf8',
    },
    light: {
      '--bg': '#f0fdf4',
      '--surface': '#dcfce7',
      '--surface2': '#bbf7d0',
      '--card': '#ffffff',
      '--accent': '#15803d',
      '--accent2': '#a16207',
      '--accent3': '#0369a1',
      '--text': '#052e16',
      '--muted': '#3d6e4a',
      '--border': 'rgba(21,128,61,0.18)',
      '--orb1': '#4ade80',
      '--orb2': '#facc15',
      '--orb3': '#38bdf8',
    },
  },
  ember: {
    name: 'Ember',
    emoji: '🔥',
    dark: {
      '--bg': '#100806',
      '--surface': '#1c100a',
      '--surface2': '#26160e',
      '--card': '#1e0f09',
      '--accent': '#fb923c',
      '--accent2': '#fbbf24',
      '--accent3': '#f87171',
      '--text': '#fff7ed',
      '--muted': '#8a6040',
      '--border': 'rgba(251,146,60,0.18)',
      '--orb1': '#fb923c',
      '--orb2': '#fbbf24',
      '--orb3': '#f87171',
    },
    light: {
      '--bg': '#fff7ed',
      '--surface': '#ffedd5',
      '--surface2': '#fed7aa',
      '--card': '#ffffff',
      '--accent': '#c2410c',
      '--accent2': '#b45309',
      '--accent3': '#dc2626',
      '--text': '#431407',
      '--muted': '#8a5030',
      '--border': 'rgba(194,65,12,0.18)',
      '--orb1': '#fb923c',
      '--orb2': '#fbbf24',
      '--orb3': '#f87171',
    },
  },
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('purple')
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    const savedMode = localStorage.getItem('portfolio-mode')
    if (saved && themes[saved]) setThemeName(saved)
    if (savedMode) setIsDark(savedMode === 'dark')
  }, [])

  useEffect(() => {
    const vars = themes[themeName][isDark ? 'dark' : 'light']
    const root = document.documentElement
    Object.entries(vars).forEach(([key, val]) => root.style.setProperty(key, val))
    localStorage.setItem('portfolio-theme', themeName)
    localStorage.setItem('portfolio-mode', isDark ? 'dark' : 'light')
  }, [themeName, isDark])

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
