import UserRow from './UserRow';
function UserTable({ users ,deleteUser}) {
    return (
        <table border='1' cellPadding='8' style={{
            borderCollapse: 'collapse', width:
                '100%'
        }}>
            <thead style={{ background: '#1E4D8C', color: 'white' }}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <UserRow  
                      key={user.id} user={user} deleteUser={deleteUser} />
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;