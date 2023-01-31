var express = require("express");
var router = express.Router();
const fs = require("fs");

var users = [
  {
    username: "admin@admin.com",
    password: "admin123",
    role: "admin",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to backend server");
});

router.post("/login", function (req, res) {
  let username = req?.body?.username;
  let password = req?.body?.password;
  let result = users.find((user) => user);

  console.log("result", result.username, result.password, result.role);
  console.log("username", username, ": password : ", password);

  if (username == result.username) {
    if (password == result?.password) {
      console.log("admin");
      
      res.status(200).send({
        message: "Authorized",
        role: result.role,
      });

    } else {
      console.log("not admin");

      res.status(404).send({
        message: "Unauthorized",
        role: result.role,
      });
    }

  } else {
    console.log("user");
    
    res.status(200).send({
      message: "User",
      role: "User",
    });
  }
});


// binary data
router.get("/pdf", (req, res) => {
  fs.readFile("response.txt", (err, data) => {
    if (err) {
      res.status(500).send({ error: "Error reading PDF file" });
    } else {
      res.set("Content-Type", "application/pdf");
      res.send(data);
    }
  });
});

module.exports = router;
