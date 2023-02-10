import "./SourceFileTable.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Typography } from "@mui/material";
import { ApiService } from "../../service/apiService";
import TablePagination from "@mui/material/TablePagination";

export default function SourceFileTable() {
  const [rows, getRows] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [filteredData, setFilteredData] = React.useState(rows);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getSourceFilesData = async () => {
    await ApiService.getSourceFiles().then((res) => {
      console.log("res", res);
      getRows(res);
      setFilteredData(res);
    });
  };

  React.useEffect(() => {
    getSourceFilesData();
  }, []);

  // Show data based on search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = rows.filter(
      (row) =>
        row.filename.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.created.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.pendingDuration.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.reviewStatus.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Show data based on tab change
  const handleStatusFilter = (event, newValue) => {
    setStatusFilter(newValue);
    if (newValue === "all") {
      setFilteredData(rows);
    } else {
      const filtered = rows.filter(
        (row) => row.reviewStatus.toLowerCase() === newValue.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  // Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="table-main">
      <span className="table-span">
        <Tabs
          value={statusFilter}
          onChange={handleStatusFilter}
          className="table-tabs"
        >
          <Tab label="All Tasks" value="all" />
          <Tab label="Pending" value="pending" />
          <Tab label="Approved" value="approved" />
          <Tab label="Rejected" value="rejected" />
        </Tabs>

        <TextField
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          value={searchTerm}
          onChange={handleSearch}
          className="table-search-textfield"
          placeholder="Search"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
          }}
        />
      </span>
      <div className="table-scroll">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Source File Name</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Pending Duration</TableCell>
              <TableCell>Review Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.filename}>
                  <TableCell component="th" scope="row">
                    {row.filename}
                  </TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell>{row.pendingDuration}</TableCell>
                  <TableCell>{row.reviewStatus}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
  );
}