import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  return 'dark';
}

function applyTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

// Module-level state for singleton behaviour across re-renders
let _theme: Theme = getInitialTheme();
const _listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  _listeners.add(listener);
  return () => _listeners.delete(listener);
}

function setTheme(theme: Theme) {
  _theme = theme;
  applyTheme(theme);
  _listeners.forEach((fn) => fn());
}

// Apply on first load
if (typeof window !== 'undefined') applyTheme(_theme);

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setLocalTheme] = useState<Theme>(_theme);

  useEffect(() => {
    // Sync state with module-level value
    setLocalTheme(_theme);
    const unsub = subscribe(() => setLocalTheme(_theme));
    return () => { unsub(); };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(_theme === 'light' ? 'dark' : 'light');
  }, []);

  return { theme, toggleTheme };
}
