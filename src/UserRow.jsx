import Role from "./Role";
import Currency from "./Currency";
import { useNavigate } from "react-router-dom";
function UserRow({ user ,deleteUser}) {
    const navigate = useNavigate(); 
    return (
        <tr  onClick={() => navigate(`/users/${user.id}`)}
         style={{ cursor: 'pointer' }} >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Role role={user.role} color={'blue'} /></td>
            <td><Currency currency={{ name: 'Algerian Dinar', code: 'DZD', symbol: 'د.ج', exchangeRate: 25000417 }} /></td>
            <td>
                <button onClick={(e) =>{ e.stopPropagation() 
                                        ; deleteUser(user.id)}}>Delete</button>
            </td>
        </tr>
    );
}
export default UserRow; 