// import React, { useState } from "react";
// import TablePagination from "@mui/material/TablePagination";

// const PaginatedTable = ({ data, rowsPerPageOptions, handleChangeRowsPerPage }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <div>
//       <TablePagination
//         rowsPerPageOptions={rowsPerPageOptions}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

// export default PaginatedTable;
