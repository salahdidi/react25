import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import OpsError from '../OpsError';
import { useTheme } from '../context/ThemeContext';

function UserDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {styles} = useTheme();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('User not found');
                return res.json();
            })
            .then((data) => { setUser(data); setLoading(false); })
            .catch((err) => { setError(err.message); setLoading(false); });
    }, [id]); // re-fetch if the id in the URL changes 

    if (loading) return <LoadingSpinner />;
    if (error) return <OpsError message={error} />;

    return (
        <div style={{ padding: '32px', maxWidth: '600px' }}>
            <button onClick={() => navigate('/users')}
             style={{ marginBottom: '24px' ,color: styles.Textcolor, background: 'transparent', border: '1px solid', borderRadius: '6px', padding: '6px 14px', cursor: 'pointer' }}>
                Back to Users
            </button>

            <h2 style={{ marginBottom: '4px' }}>{user.name}</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>@{user.username}</p>

            <div style={{
                display: 'grid', gridTemplateColumns: '140px 1fr', gap: '12px'
            }}>
                <span style={{ fontWeight: 'bold' }}>Email</span>
                <span>{user.email}</span>
                <span style={{ fontWeight: 'bold' }}>Phone</span>
                <span>{user.phone}</span>
                <span style={{ fontWeight: 'bold' }}>Website</span>
                <span>{user.website}</span>
                <span style={{ fontWeight: 'bold' }}>Company</span>
                <span>{user.company.name}</span>
                <span style={{ fontWeight: 'bold' }}>City</span>
                <span>{user.address.city}</span>
            </div>
        </div>
    );
}

export default UserDetailPage; 