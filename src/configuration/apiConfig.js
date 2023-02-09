import config from './config.json';

const url = config.localhostUrl;

const apiUrlConfig = {
    loginUrl: url + "/login",
    invoiceMetricsUrl: url + "/metrics",
    sourceFilesUrl: url + "/sourcefiles"
}

export default apiUrlConfig;

