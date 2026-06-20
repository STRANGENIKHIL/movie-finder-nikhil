export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pagination">
      <button
        id="pagination-prev"
        className="pagination-btn"
        onClick={handlePrev}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        ← Previous
      </button>

      <div className="pagination-info">
        Page <span>{currentPage}</span> of <span>{totalPages}</span>
      </div>

      <button
        id="pagination-next"
        className="pagination-btn"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  );
}
