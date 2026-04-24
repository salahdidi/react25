import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import {  useTheme } from './context/ThemeContext';
import NavBar from './components/NavBar';

function App() {
  const { styles } = useTheme();
  return (
    
      <div style={{ minHeight: '100vh', background: styles.background, color: 
styles.color }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserDetailPage />} />
        </Routes>
      </div>
   
  );
}

export default App; 