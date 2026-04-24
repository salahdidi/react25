import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

function NavBar() {
  const location = useLocation(); // gives us the current URL path 

  const linkStyle = (path) => ({
    marginRight: '16px',
    textDecoration: 'none',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    color: location.pathname === path ? 'white' : '#B0C8E8',
    borderBottom: location.pathname === path ? '2px solid white' : 'none', paddingBottom: '4px',
  });

  return (
    <nav style={{
      background: '#1E4D8C', padding: '12px 24px', display: 'flex',
      alignItems: 'center'
    }}>
      <span style={{
        color: 'white', fontWeight: 'bold', marginRight: '32px'
      }}>UserManager</span>
      <Link to='/' style={linkStyle('/')}>Home</Link>
      <Link to='/users' style={linkStyle('/users')}>Users</Link>
    </nav>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App; 