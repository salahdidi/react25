export default function Searsh({ search, setSearch,filtredCount,usersCount }) {
    //js
    return (
        <div style={{ marginBottom: '16px' }}>
            <input
                type='text'
                placeholder='Search by name...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: '8px', width: '260px', marginBottom: '16px', fontSize:
                        '14px'
                }}
            />
            <span style={{ marginLeft: '12px', color: '#666', fontSize: '14px' }}>
                {filtredCount} of {usersCount} users
            </span>
        </div>
    )
};