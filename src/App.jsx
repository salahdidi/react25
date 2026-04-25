import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import {  useTheme } from './context/ThemeContext';
import NavBar from './components/NavBar';
import AddUserPage from './pages/AddUserPage';

function App() {
  const { styles } = useTheme();
  const addUser = (newUser) => {
     console.log('New user added:', newUser);
  }
  return (
    
      <div style={{ minHeight: '100vh', background: styles.background, color: 
styles.color }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserDetailPage />} />
          <Route path='/add-user' element={<AddUserPage onAddUser={addUser} />} />
        </Routes>
      </div>
   
  );
}

export default App; 