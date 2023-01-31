import React from "react";
import { Grid, Box } from "@mui/material";
import "./Dashboard.css";
import InvoiceMetrics from "./InvoiceMetrics";
import SourceFileTable from "./SourceFileTable";

const DashboardUser = () => {
  return (
    <Grid container className="user-dashboard-style">
      <Grid item xs={12}>
        <Box p={2} className="username-style">
          Welcome [User Name]
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <InvoiceMetrics />     
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={2} className="username-style">
          <SourceFileTable />
          {/* table */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardUser;
