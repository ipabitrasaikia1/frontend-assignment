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
        <div className="pagination">
            <button aria-label="Previous Page" className="pagination-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    aria-label="current Page"
                    key={index}
                    className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                    onClick={() => typeof page === "number" && setCurrentPage(page)}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
            <button aria-label="Next Page" className="pagination-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                Next
            </button>
        </div>
    );
};

export default Pagination;