import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { AuthProvider } from './contexts/AuthContext';
import { SpinnerProvider } from './contexts/SpinnerContext';
import App from './components/App/App';
import './assets/index.css';
import { SidebarProvider } from './contexts/SidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpinnerProvider>
      <DarkModeProvider>
        <AuthProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </AuthProvider>
      </DarkModeProvider>
    </SpinnerProvider>
  </React.StrictMode>
);
