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
import SearchIcon from '@mui/icons-material/Search';

const rows = [
  {
    filename: "File 1",
    created: "01/01/2023",
    pendingDuration: "3 days",
    status: "Pending",
  },
  {
    filename: "File 2",
    created: "01/02/2023",
    pendingDuration: "5 days",
    status: "Approved",
  },
  {
    filename: "File 3",
    created: "01/03/2023",
    pendingDuration: "7 days",
    status: "Rejected",
  },
  {
    filename: "File 4",
    created: "01/04/2023",
    pendingDuration: "9 days",
    status: "Pending",
  },
  {
    filename: "File 5",
    created: "01/05/2023",
    pendingDuration: "11 days",
    status: "Approved",
  },
];

export default function SourceFileTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [filteredData, setFilteredData] = React.useState(rows);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = rows.filter(
      (row) =>
        row.filename.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.created.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.pendingDuration
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        row.status.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleStatusFilter = (event, newValue) => {
    setStatusFilter(newValue);
    if (newValue === "All") {
      setFilteredData(rows);
    } else {
      const filtered = rows.filter(
        (row) => row.status.toLowerCase() === newValue.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
    <span style={{ display: "flex", justifyContent: "space-between", width: "98%" }}>
    <Tabs value={statusFilter} onChange={handleStatusFilter}>
      <Tab label="All Tasks" value="All" />
      <Tab label="Pending" value="Pending" />
      <Tab label="Approved" value="Approved" />
      <Tab label="Rejected" value="Rejected" />
    </Tabs>
    <TextField
      label="Search"
      value={searchTerm}
      onChange={handleSearch}
    ><SearchIcon /></TextField>
    </span>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Filename</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Pending Duration</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.filename}>
                <TableCell component="th" scope="row">
                  {row.filename}
                </TableCell>
                <TableCell>{row.created}</TableCell>
                <TableCell>{row.pendingDuration}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
