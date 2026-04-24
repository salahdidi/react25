import { useTheme } from '../context/ThemeContext'; 
 
function HomePage() { 
  const { styles } = useTheme(); 
  return ( 
    <div style={{ padding: '40px', textAlign: 'center', color: styles.Textcolor }}> 
      <h2 style={{ color: styles.Textcolor }}>Welcome to User Manager</h2> 
      <p>Use the navigation bar above to visit the Users page.</p> 
      <p>Try toggling dark mode using the button in the top right!</p> 
    </div> 
  ); 
} 
 
export default HomePage; 