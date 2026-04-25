import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import InputFinance from '../components/InputFinance';
import { useNotification } from '../context/NotificationContext';

function AddUserPage({ onAddUser }) {
    const navigate = useNavigate();
    const { styles } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nin, setNin] = useState('');
    const [lengthNin, setLengthNin] = useState(0);
    const [role, setRole] = useState('Viewer');
    const [errors, setErrors] = useState({});
     const { showToast } = useNotification(); 

    const validate = () => {
        const errs = {};
        if (!name.trim()) errs.name = 'Name is required';
        if (!email.trim()) errs.email = 'Email is required';
        else if (!email.includes('@'))
            errs.email = 'Enter a valid email address';
      
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }

        const newUser = { id: Date.now(), name, email, nin, role };
        onAddUser(newUser);   // add to the users list in App 
        showToast(`${name} was added successfully!`, 'success'); // new 
        navigate('/users');   // redirect back to the table 
    };

    const inputStyle = (field) => ({
        display: 'block', width: '100%', padding: '8px 12px', marginTop: '4px',
        marginBottom: '4px', fontSize: '14px',
        border: errors[field] ? '1px solid red' : '1px solid #ccc',
        borderRadius: '4px', background: styles.cardBg, color: styles.color,
    });

    

    return (
        <div style={{ padding: '32px', maxWidth: '480px' }}>
            <h2 style={{ color: styles.Textcolor }}>Add New User</h2>

            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: '16px' }}>
                    <label>Full Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='e.g. Alice Dupont'
                        style={inputStyle('name')}
                    />
                    {errors.name && <span style={{
                        color: 'red', fontSize: '13px'
                    }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <label>Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='alice@example.com'
                        style={inputStyle('email')}
                    />
                    {errors.email && <span style={{
                        color: 'red', fontSize: '13px'
                    }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <InputFinance label='National ID Number (NIN)' value={nin} length={19} setErrors={setErrors} errors={errors} onChange={(val) => { setNin(val); setLengthNin(val.length); }} />
                </div>
                 
                <div style={{ marginBottom: '24px' }}>
                    <label>Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ ...inputStyle('role'), cursor: 'pointer' }}
                    >
                        <option value='Admin'>Admin</option>
                        <option value='Editor'>Editor</option>
                        <option value='Viewer'>Viewer</option>
                    </select>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <button type='submit' style={{
                        background: '#1E4D8C', color: 'white',
                        padding: '8px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer'
                    }}>
                        Add User
                    </button>
                    <button type='button' onClick={() => navigate('/users')} style={{
                        padding: '8px 20px', cursor: 'pointer'
                    }}>
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    );
}

export default AddUserPage; 