function ConfirmModal({ user, onConfirm, onCancel }) { 
  if (!user) return null; // render nothing when no user is pending deletion 
 
  return ( 
    // Overlay — covers the whole screen 
    <div style={{ 
      position: 'fixed', inset: 0, 
      background: 'rgba(0, 0, 0, 0.5)', 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      zIndex: 1000, 
    }}> 
      {/* Modal box */} 
      <div style={{ 
        background: 'white', borderRadius: '8px', 
        padding: '32px', maxWidth: '400px', width: '100%', 
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)', 
      }}> 
        <h3 style={{ marginBottom: '12px' }}>Delete User</h3> 
        <p style={{ marginBottom: '24px', color: '#555' }}> 
          Are you sure you want to delete <strong>{user.name}</strong>? 
          This action cannot be undone. 
        </p> 
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}> 
          <button 
            onClick={onCancel} 
            style={{ padding: '8px 20px', cursor: 'pointer' }} 
          > 
            Cancel 
          </button> 
          <button 
            onClick={() => onConfirm(user.id)} 
            style={{ background: '#cc0000', color: 'white', 
                     padding: '8px 20px', border: 'none', 
                     borderRadius: '4px', cursor: 'pointer' }} 
          > 
            Delete 
          </button> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default ConfirmModal; 