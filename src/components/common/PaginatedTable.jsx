// // Pagination Component
// import React from 'react';

// const PaginatedTable= (props) => {
//   const { page, setPage, pageSize, setPageSize, total } = props;

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   const handlePageSizeChange = (event) => {
//     setPageSize(event.target.value);
//   };

//   return (
//     <div>
//       <button disabled={page === 0} onClick={() => handlePageChange(page - 1)}>
//         Previous
//       </button>
//       <span>
//         Page {page + 1} of {Math.ceil(total / pageSize)}
//       </span>
//       <button
//         disabled={page + 1 >= Math.ceil(total / pageSize)}
//         onClick={() => handlePageChange(page + 1)}
//       >
//         Next
//       </button>
//       <label htmlFor="page-size-select">Page Size:</label>
//       <select
//         id="page-size-select"
//         value={pageSize}
//         onChange={handlePageSizeChange}
//       >
//         <option value={10}>10</option>
//         <option value={20}>20</option>
//         <option value={50}>50</option>
//       </select>
//     </div>
//   );
// };

// export default PaginatedTable;

