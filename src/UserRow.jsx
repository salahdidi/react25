import Role from "./Role";
import Currency from "./Currency";
function UserRow({ user ,deleteUser}) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Role role={user.role} color={'blue'} /></td>
            <td><Currency currency={{ name: 'Algerian Dinar', code: 'DZD', symbol: 'د.ج', exchangeRate: 25000417 }} /></td>
            <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
        </tr>
    );
}
export default UserRow; 