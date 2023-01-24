var express = require("express");
var router = express.Router();

var users = [
  {
    email: "admin@admin.com",
    password: "admin123",
    role: "admin",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to backend server");
});

router.post("/login", function (req, res) {
  let username = req?.body?.email;
  let password = req?.body?.password;
  let result = users.find((user) => user);

  console.log("result", result.email, result.password, result.role);
  console.log("username", username, ": password : ", password);

  if (username == result.email) {
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

module.exports = router;
