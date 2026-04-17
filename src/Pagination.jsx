 function Pagination({ currentPage,setCurrentPage, totalPages, onPageChange }) {

    return (
     
        <div style={{
          marginTop: '16px', display: 'flex', gap: '8px', alignItems:
            'center'
      }}>
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                fontWeight: page === currentPage ? 'bold' : 'normal',
                background: page === currentPage ? '#1E4D8C' : 'white',
                color: page === currentPage ? 'white' : 'black',
                padding: '4px 10px',
              }}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          <span style={{ color: '#666', fontSize: '14px' }}>
            Page {currentPage} of {totalPages}
          </span>
        </div>
      );
}
export default Pagination;

