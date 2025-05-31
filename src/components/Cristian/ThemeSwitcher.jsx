import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
  useEffect(() => {
    const themeButton = document.getElementById('theme-switcher-grid');
    const htmlElement = document.documentElement;
    const storageKey = 'theme-preference';

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        htmlElement.style.colorScheme = 'dark';
        themeButton.classList.add('night-theme');
        localStorage.setItem(storageKey, 'dark');
      } else if (theme === 'light') {
        htmlElement.style.colorScheme = 'light';
        themeButton.classList.remove('night-theme');
        localStorage.setItem(storageKey, 'light');
      } else if (theme === 'system') {
        htmlElement.style.colorScheme = '';
        themeButton.classList.remove('night-theme');
        localStorage.removeItem(storageKey);
      }
    };

    const toggleTheme = () => {
      const currentPreference = localStorage.getItem(storageKey) || defaultTheme;
      const nextTheme = currentPreference === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    };

    themeButton.addEventListener('click', toggleTheme);

    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme = savedTheme || defaultTheme;
    applyTheme(initialTheme);

    return () => {
      themeButton.removeEventListener('click', toggleTheme);
    };
  }, []);

  return null; // Este componente no renderiza nada, solo maneja la lógica del tema
};

export default ThemeSwitcher;