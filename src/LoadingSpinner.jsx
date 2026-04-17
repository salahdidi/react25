const LoadingSpinner = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '240px',
    padding: '32px',
    color: '#4f46e5',
  };

  const ballStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    boxShadow: '0 12px 20px rgba(79, 70, 229, 0.25)',
    animation: 'jump-turn 0.9s ease-in-out infinite',
  };

  const shadowStyle = {
    width: '50px',
    height: '8px',
    background: 'rgba(79, 70, 229, 0.18)',
    borderRadius: '999px',
    marginTop: '18px',
    animation: 'shadow-scale 0.9s ease-in-out infinite',
  };

  const labelStyle = {
    marginTop: '16px',
    fontSize: '15px',
    color: '#334155',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={ballStyle} />
        <div style={shadowStyle} />
      </div>
      <p style={labelStyle}>Loading users...</p>
      <style>{`
        @keyframes jump-turn {
          0% { transform: translateY(0) rotate(0deg); }
          45% { transform: translateY(-18px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }

        @keyframes shadow-scale {
          0%, 100% { transform: scaleX(1); opacity: 0.45; }
          45% { transform: scaleX(1.35); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
