const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, maxPagesToShow = 5 }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        let pages = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push("...");
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push("...");
            pages.push(totalPages);
        }
        
        return pages;
    };

    return (
        <nav className="pagination" aria-label="Pagination">
            <button 
                aria-label="Previous Page" 
                className="pagination-btn" 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Previous
            </button>

            <div aria-live="polite">
                {getPageNumbers().map((page, index) => (
                    typeof page === "number" ? (
                        <button
                            key={index}
                            className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                            onClick={() => setCurrentPage(page)}
                            aria-label={`Go to page ${page}`}
                            aria-current={page === currentPage ? "page" : undefined}
                        >
                            {page}
                        </button>
                    ) : (
                        <button key={index} className="pagination-dots" aria-hidden="true" tabIndex={0}>
                            {page}
                        </button>
                    )
                ))}
            </div>

            <button 
                aria-label="Next Page" 
                className="pagination-btn" 
                disabled={currentPage === totalPages} 
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;