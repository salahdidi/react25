import { useEffect, useState } from 'react';
import UserTable from '../UserTable';
import Pagination from '../Pagination';
import Searsh from '../Searsh';
import LoadingSpinner from '../LoadingSpinner';
import OpsError from '../OpsError';
import { useTheme } from '../context/ThemeContext';

const USERS_PER_PAGE = 5;

function UserPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {styles,toggleTheme} = useTheme();

  // Fetch users once on mount 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load users');
        return res.json();
      })
      .then((data) => {
        // Map API fields to our app's shape 
        const mapped = data.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          role: 'User', // API doesn't have a role, so we default it 
        }));
        setUsers(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty array = run once on mount 

  const deleteUser = (id) => {
    // .filter() returns a new array without the deleted user 
    setUsers(users.filter((user) => user.id !== id));
  };
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  function searshdata(value) {
    setSearch(value);
    setCurrentPage(1); // reset to first page on new search
  }
  // Step 1: how many pages total? 
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  // Step 2: calculate start and end index 
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;  // page 1 → 0, page 2 → 3 
  const endIndex = startIndex + USERS_PER_PAGE;          // page 1 → 3, page 2 → 6 

  // Step 3: slice the filtered array 
  const pageUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ color: styles.Textcolor }}>User List ({filteredUsers.length} users)</h2>

      <Searsh search={search} setSearch={searshdata} filtredCount={filteredUsers.length} usersCount={users.length}
        setCurrentPage={setCurrentPage} />

      {loading === true ? <LoadingSpinner />
        : error ? <OpsError message={error} />
          : filteredUsers.length === 0
        ? <p style={{ padding: '32px', textAlign: 'center', color: '#999', fontSize: '16px' }}>No users match your search</p>
        : <UserTable users={pageUsers} deleteUser={deleteUser} />
      }
      
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
       
    </div>
  );
}

export default UserPage;