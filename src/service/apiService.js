import axios from "axios";
import url from "../configuration/apiConfig";

export class ApiService {
  static metricsUrl = url.invoiceMetricsUrl;
  static sourceFilesUrl = url.sourceFilesUrl;

  static config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //   Get invoice processing metrics
  static async getMetrics() {
    try {
      const resp = await axios.get(this.metricsUrl, this.config);
      if (resp) {
        let response = resp.data;
        // console.log("resp", response)
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }

  //  Get all source files
  static async getSourceFiles() {
    try {
      const resp = await axios.get(this.sourceFilesUrl, this.config);
      if (resp) {
        let response = resp.data;
        console.log("resp", response)
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }

}
