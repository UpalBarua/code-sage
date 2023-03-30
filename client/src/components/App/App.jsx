import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { router } from '../../routes/Router';
import Spinner from '../spinner/Spinner';
import styles from './App.module.css';

const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="app" data-dark-mode={isDarkMode}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
