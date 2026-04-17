const OpsError = ({ message }) => {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '220px',
    padding: '32px',
    backgroundColor: '#fff5f5',
    border: '1px solid #fecaca',
    borderRadius: '16px',
    color: '#b91c1c',
  };

  const iconStyle = {
    fontSize: '48px',
    marginBottom: '16px',
    lineHeight: 1,
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '8px',
  };

  const messageStyle = {
    fontSize: '15px',
    textAlign: 'center',
    maxWidth: '320px',
    color: '#991b1b',
  };

  return (
    <div style={wrapperStyle}>
      <div style={iconStyle}>⚠️</div>
      <div style={titleStyle}>Ops! Something went wrong</div>
      <div style={messageStyle}>{message}</div>
    </div>
  );
};

export default OpsError;
