import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();
export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-dark-mode', isDarkMode);
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    handleDarkModeToggle,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
