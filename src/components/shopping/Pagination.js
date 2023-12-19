// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Pagination = ({
//   totalItems,
//   itemsPerPage,
//   onPageChange,
//   goToPageInput,
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(goToPageInput || 1);

//   console.log("goToPageInput at pagination", goToPageInput);

//   useEffect(() => {
//     onPageChange(currentPage);
//   }, [currentPage, onPageChange]);

//   useEffect(() => {
//     setCurrentPage(goToPageInput || 1);
//   }, [goToPageInput]);

//   const handlePageClick = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const renderPaginationLinks = () => {
//     const links = [];

//     links.push(
//       <li
//         key="previous"
//         className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//       >
//         <Link
//           to="#"
//           className="page-link"
//           onClick={() => handlePageClick(currentPage - 1)}
//           tabIndex={-1}
//           aria-disabled={currentPage === 1}
//         >
//           <i className="fa-solid fa-angles-left" />
//         </Link>
//       </li>
//     );

//     for (let i = 1; i <= totalPages; i++) {
//       links.push(
//         <li
//           key={i}
//           className={`page-item ${currentPage === i ? "active" : ""}`}
//         >
//           <Link to="#" className="page-link" onClick={() => handlePageClick(i)}>
//             {i}
//           </Link>
//         </li>
//       );
//     }

//     links.push(
//       <li
//         key="next"
//         className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
//       >
//         <Link
//           to="#"
//           className="page-link"
//           onClick={() => handlePageClick(currentPage + 1)}
//           tabIndex={-1}
//           aria-disabled={currentPage === totalPages}
//         >
//           <i className="fa-solid fa-angles-right" />
//         </Link>
//       </li>
//     );

//     return links;
//   };

//   return (
//     <ul className="pagination justify-content-center">
//       {renderPaginationLinks()}
//     </ul>
//   );
// };

// export default Pagination;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  goToPageInput,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(goToPageInput || 1);

  console.log("goToPageInput at pagination", goToPageInput);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  useEffect(() => {
    setCurrentPage(goToPageInput || 1);
  }, [goToPageInput]);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationLinks = () => {
    const links = [];

    links.push(
      <li
        key="previous"
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
      >
        <Link
          to="#"
          className="page-link"
          onClick={() => handlePageClick(currentPage - 1)}
          tabIndex={-1}
          aria-disabled={currentPage === 1}
        >
          <i className="fa-solid fa-angles-left" />
        </Link>
      </li>
    );

    const maxVisiblePages = 3; // Adjust this value as needed
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      links.push(
        <li key="ellipsis-start" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <Link to="#" className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </Link>
        </li>
      );
    }

    if (endPage < totalPages) {
      links.push(
        <li key="ellipsis-end" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    links.push(
      <li
        key="next"
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <Link
          to="#"
          className="page-link"
          onClick={() => handlePageClick(currentPage + 1)}
          tabIndex={-1}
          aria-disabled={currentPage === totalPages}
        >
          <i className="fa-solid fa-angles-right" />
        </Link>
      </li>
    );

    return links;
  };

  return (
    <ul className="pagination justify-content-center">
      {renderPaginationLinks()}
    </ul>
  );
};

export default Pagination;
