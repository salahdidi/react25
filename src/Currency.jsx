function Currency({ currency }) {
    const formatAlgerianCurrency = (amount) => {
        return new Intl.NumberFormat('ar-DZ', {
            style: 'currency',
            currency: 'DZD'
        }).format(amount);
    };

    return (
        <div style={styles.container}>
            <p style={styles.text}><span style={styles.rate}>{formatAlgerianCurrency(currency.exchangeRate)}</span></p>
        </div>
    );
}

const styles = {
    container: {
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        border: '2px solid #1b7a2e'
    },
    title: {
        color: '#1b7a2e',
        fontSize: '24px',
        marginBottom: '12px'
    },
    text: {
        fontSize: '16px',
        color: '#333'
    },
    symbol: {
        fontWeight: 'bold',
        color: '#1b7a2e'
    },
    rate: {
        fontWeight: 'bold',
        color: '#d4a373'
    }
};

export default Currency;