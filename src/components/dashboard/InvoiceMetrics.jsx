import React, { useEffect, useState } from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import "./InvoiceMetrics.css";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { ApiService } from "../../service/apiService";

const InvoiceMetrics = () => {
  const [metricsData, setMetricsData] = useState([]);

  const getMetricsData = async () => {
    await ApiService.getMetrics().then((res) => {
      // console.log("res", res);
      setMetricsData(res)
    });
  };

  useEffect(() => {
    getMetricsData();
  }, []);

//  console.log("metricsData", metricsData)

  return (
    <>
      <Card className="card-style">
        <CardContent>
          <Box p={1}>Invoice Processing Metrics</Box>
          <Grid container>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>{metricsData[0]?.totalCount}</Typography>
                <Typography className="kpi-container1">
                  <TripOriginIcon
                    className="kpi-icon1"
                    sx={{ color: "#799A3D" }}
                    fontSize="small"
                  />
                  <span className="kpi-title1">{metricsData[0]?.title}</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>{metricsData[1]?.invoiceCount}</Typography>
                <Typography className="kpi-container2">
                  <TripOriginIcon
                    className="kpi-icon2"
                    sx={{ color: "#E88686" }}
                    fontSize="small"
                  />
                  <span className="kpi-title2">{metricsData[1]?.title}</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>{metricsData[2]?.usersCount}</Typography>
                <Typography className="kpi-container3">
                  <TripOriginIcon
                    className="kpi-icon3"
                    sx={{ color: "#E3C64E" }}
                    fontSize="small"
                  />
                  <span className="kpi-title3">
                  {metricsData[2]?.title}
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                <Typography>{metricsData[3]?.timeCount}</Typography>
                <Typography className="kpi-container4">
                  <TripOriginIcon
                    className="kpi-icon4"
                    sx={{ color: "#808080" }}
                    fontSize="small"
                  />
                  <span className="kpi-title4">{metricsData[3]?.title}</span>
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
