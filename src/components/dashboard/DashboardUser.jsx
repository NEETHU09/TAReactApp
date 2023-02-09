import React from "react";
import { Grid, Box } from "@mui/material";
import "./Dashboard.css";
import InvoiceMetrics from "./InvoiceMetrics";
import SourceFileTable from "./SourceFileTable";
import { constant } from "../../configuration/constants";

const DashboardUser = () => {
  const username = sessionStorage.getItem(constant.username);
  console.log("username", username)
  return (
    <Grid container className="user-dashboard-style">
      <Grid item xs={12}>
        <Box p={2} className="username-style">
          Welcome [User Name: {username}]
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1} className="metrics-style">
          <InvoiceMetrics />     
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1} className="table-style">
          <SourceFileTable />
          {/* table */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardUser;
