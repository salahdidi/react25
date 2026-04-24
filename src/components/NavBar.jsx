import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
    const location = useLocation(); // gives us the current URL path 
    const { theme, toggleTheme, styles } = useTheme();
    const linkStyle = (path) => ({
        marginRight: '16px',
        textDecoration: 'none',
        fontWeight: location.pathname === path ? 'bold' : 'normal',
        color: location.pathname === path ? 'white' : '#B0C8E8',
        borderBottom: location.pathname === path ? '2px solid white' : 'none', paddingBottom: '4px',
    });

    return (
        <nav style={{
            background: '#1E4D8C', padding: '12px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'spacebetween'
        }}>
            <div>
                <span style={{
                    color: 'white', fontWeight: 'bold', marginRight: '32px'
                }}>UserManager</span>
                <Link to='/' style={{
                    color: 'white', marginRight: '16px',
                    textDecoration: 'none'
                }}>Home</Link>
                <Link to='/users' style={{
                    color: 'white', textDecoration: 'none'
                }}>Users</Link>
            </div >
            <button
                onClick={toggleTheme}
                style={{
                    background: 'rgba(255,255,255,0.2)', color: 'white',
                    border: '1px solid rgba(255,255,255,0.4)', borderRadius: '6px',
                    padding: '6px 14px', cursor: 'pointer'
                }}
            >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </nav >
    );

}

export default NavBar;