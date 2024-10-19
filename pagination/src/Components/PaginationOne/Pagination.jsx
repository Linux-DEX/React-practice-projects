import React from "react";

const Pagination = ({
  postsPerPage,
  length,
  currentPage,
  handlePagination,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  const handleNext = () => {
    if (currentPage < paginationNumbers.length) {
      handlePagination(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}>
          {pageNumber}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === paginationNumbers.length}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
