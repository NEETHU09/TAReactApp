import React from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import "./InvoiceMetrics.css";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const InvoiceMetrics = () => {
  return (
    <>
      <Card className="card-style">
        <CardContent>
          <Box p={1}>Invoice Processing Metrics</Box>
          <Grid container>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>30</Typography>
                <Typography className="kpi-container1">
                  <TripOriginIcon
                    className="kpi-icon1"
                    sx={{ color: "#799A3D" }}
                    fontSize="small"
                  />
                  <span className="kpi-title1">Total Invoice Count</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>10</Typography>
                <Typography className="kpi-container2">
                  <TripOriginIcon
                    className="kpi-icon2"
                    sx={{ color: "#E88686" }}
                    fontSize="small"
                  />
                  <span className="kpi-title2">Self Assigned Invoices</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>4</Typography>
                <Typography className="kpi-container3">
                  <TripOriginIcon
                    className="kpi-icon3"
                    sx={{ color: "#E3C64E" }}
                    fontSize="small"
                  />
                  <span className="kpi-title3">
                    Unique Users Currently Reviewing
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>10 min</Typography>
                <Typography className="kpi-container4">
                  <TripOriginIcon
                    className="kpi-icon4"
                    sx={{ color: "#808080" }}
                    fontSize="small"
                  />
                  <span className="kpi-title4">
                    Unique Users Currently Reviewing
                  </span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default InvoiceMetrics;
