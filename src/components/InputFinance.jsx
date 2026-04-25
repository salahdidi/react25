import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const InputFinance = ({ label, value,length,setErrors,errors , onChange }) => {
    const [lengthNin, setLengthNin] = useState(0);
     const { styles } = useTheme();
     const inputStyle = (field) => ({
        display: 'block', width: '100%', padding: '8px 12px', marginTop: '4px',
        marginBottom: '4px', fontSize: '14px',
        border: errors[field] ? '1px solid red' : '1px solid #ccc',
        borderRadius: '4px', background: styles.cardBg, color: styles.color,
    });
const validate = () => {
        setLengthNin(value.length);
        if (value.length !== length) {
            setErrors((prev) => ({ ...prev, nin: `NIN must be exactly ${length} characters` }));
        }

    }
    return (
        <div><label>{label}</label>
            <input
                value={value}
                onChange={(e) => { onChange(e.target.value); validate(); }}
                placeholder={label}
                style={inputStyle('nin')}
                disabled={lengthNin >= length} // disable if length is reached and there's no error
            />
            <span style={{ fontSize: '12px', color: '#666' }}>{lengthNin}/{length} characters</span>
            {errors.nin && <span style={{
                color: 'red', fontSize: '13px'
            }}>{errors.nin}</span>}</div>

    );
}
export default InputFinance;