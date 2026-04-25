import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { NotificationProvider } from './context/NotificationContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <ThemeProvider>
      <NotificationProvider>
     <App />
      </NotificationProvider>
     </ThemeProvider>
    </BrowserRouter> 
  </StrictMode>,
)
