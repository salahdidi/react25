function Role({ role ,color }) {
    return (
        <span style={{
            backgroundColor: color,
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '4px',
            border: '1px solid #0056b3',
            fontSize: '14px',
            fontWeight: '500',
            display: 'inline-block'
        }}>{role}</span>
    );
}
export default Role;