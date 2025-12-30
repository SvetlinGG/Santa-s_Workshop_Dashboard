export default function Pagination({ page, pageSize, total, onPageChange }) {
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const canPrev = page > 1;
    const canNext = page < totalPages;
  
    return (
      <div className="pagination">
        <button className="btn" disabled={!canPrev} onClick={() => onPageChange(page - 1)}>
          Prev
        </button>
  
        <span className="muted">
          Page <strong>{page}</strong> / {totalPages}
        </span>
  
        <button className="btn" disabled={!canNext} onClick={() => onPageChange(page + 1)}>
          Next
        </button>
      </div>
    );
}