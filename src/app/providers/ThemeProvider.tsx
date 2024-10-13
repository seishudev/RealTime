import { FC, useEffect, createContext } from 'react';
import { useLocalStorage } from '../../shared/hooks';

export const ThemeContext = createContext();

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
