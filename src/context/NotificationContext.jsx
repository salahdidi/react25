import { createContext, useState, useContext, useCallback } from 'react';

const NotificationContext = createContext();

export function useNotification() {
    return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'info') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto-remove after 3 seconds 
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ showToast }}>
            {children}
            <ToastContainer toasts={toasts} onRemove={removeToast} />
        </NotificationContext.Provider>
    );
}

// Toast colors by type 
const TOAST_COLORS = {
    success: { bg: '#0F6E56', text: 'white' },
    error: { bg: '#cc0000', text: 'white' },
    info: { bg: '#1E4D8C', text: 'white' },
};

function ToastContainer({ toasts, onRemove }) {
    if (toasts.length === 0) return null;

    return (
        <div style={{
            position: 'fixed', top: '16px', right: '16px',
            display: 'flex', flexDirection: 'column', gap: '8px',
            zIndex: 2000,
        }}>
            {toasts.map((toast) => {
                const colors = TOAST_COLORS[toast.type] || TOAST_COLORS.info;
                return (
                    <div
                        key={toast.id}
                        style={{
                            background: colors.bg, color: colors.text,
                            padding: '12px 20px', borderRadius: '6px',
                            display: 'flex', alignItems: 'center', gap: '12px',
                            minWidth: '260px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}
                    >
                        <span style={{ flex: 1 }}>{toast.message}</span>
                        <button
                            onClick={() => onRemove(toast.id)}
                            style={{
                                background: 'none', border: 'none', color: 'white',
                                cursor: 'pointer', fontSize: '16px', lineHeight: 1
                            }}
                        >
                            x
                        </button>
                    </div>
                );
            })}
        </div>
    );
} 