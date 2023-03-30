import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(prevIsSidebarVisible => !prevIsSidebarVisible);
  };

  const value = {
    isSidebarVisible,
    handleSidebarToggle,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
