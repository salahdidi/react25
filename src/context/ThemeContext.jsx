import { createContext, useState, useContext } from 'react'; 
// 1. Create the context (exported so components can use it) 
export const ThemeContext = createContext(); 
// 2. Custom hook — makes consuming the context cleaner 
export function useTheme() { 
  return useContext(ThemeContext); 
} 
// 3. Provider component — wraps the app and holds the state 
export function ThemeProvider({ children }) { 
const [theme, setTheme] = useState('light'); 
const toggleTheme = () => { 
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));     
}; 

  // Styles for each theme 
  const themeStyles = { 
    light: { background: '#ffffff', color: '#222222', cardBg: '#f4f4f4',Textcolor: '#222222' }, 
    dark:  { background: '#1a1a2e', color: '#e0e0e0', cardBg: '#2a2a3e', Textcolor: '#e0e0e0' }, 
  }; 
 
  return ( 
    <ThemeContext.Provider value={{ theme, toggleTheme, styles: themeStyles[theme] 
}}> 
      {children} 
    </ThemeContext.Provider> 
  ); 
} 