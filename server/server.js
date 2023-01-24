var bodyParser = require('body-parser');
var express = require('express');
var apiRouter = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "token")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, isid"
  );
  next();
});

// routes
app.use("/", apiRouter);

app.use((req, res, next) => {  
  console.log("------Server running------")
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message
  })
})

var server = app.listen(8080, function () {
    console.log("Server is running on port: 8080")
 })