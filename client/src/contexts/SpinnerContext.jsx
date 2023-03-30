import React, { createContext, useContext, useState } from 'react';

const SpinnerContext = createContext();
export const useSpinner = () => useContext(SpinnerContext);

export const SpinnerProvider = ({ children }) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const value = {
    isSpinnerVisible,
    setIsSpinnerVisible,
  };

  return (
    <SpinnerContext.Provider value={value}>{children}</SpinnerContext.Provider>
  );
};
