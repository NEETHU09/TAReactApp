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

var metrics = [
  {
    totalCount: 30,
    title: "Total Invoice Count",
  },
  {
    invoiceCount: 10,
    title: "Self Assigned Invoices",
  },
  {
    usersCount: 4,
    title: "Unique Users Currently Reviewing",
  },
  {
    timeCount: "10 min",
    title: "Average Review Time",
  },
];

var rows = [
  {
    filename: "File 1",
    created: "01/01/2023",
    pendingDuration: "3 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 2",
    created: "01/02/2023",
    pendingDuration: "5 days",
    reviewStatus: "Approved",
  },
  {
    filename: "File 3",
    created: "01/03/2023",
    pendingDuration: "7 days",
    reviewStatus: "Rejected",
  },
  {
    filename: "File 4",
    created: "01/04/2023",
    pendingDuration: "9 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 5",
    created: "01/05/2023",
    pendingDuration: "11 days",
    reviewStatus: "Approved",
  },

  {
    filename: "File 6",
    created: "01/01/2023",
    pendingDuration: "3 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 7",
    created: "01/02/2023",
    pendingDuration: "5 days",
    reviewStatus: "Approved",
  },
  {
    filename: "File 8",
    created: "01/03/2023",
    pendingDuration: "7 days",
    reviewStatus: "Rejected",
  },
  {
    filename: "File 9",
    created: "01/04/2023",
    pendingDuration: "9 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 10",
    created: "01/05/2023",
    pendingDuration: "11 days",
    reviewStatus: "Approved",
  },

  {
    filename: "File 11",
    created: "01/01/2023",
    pendingDuration: "3 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 12",
    created: "01/02/2023",
    pendingDuration: "5 days",
    reviewStatus: "Approved",
  },
  {
    filename: "File 13",
    created: "01/03/2023",
    pendingDuration: "7 days",
    reviewStatus: "Rejected",
  },
  {
    filename: "File 14",
    created: "01/04/2023",
    pendingDuration: "9 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 15",
    created: "01/05/2023",
    pendingDuration: "11 days",
    reviewStatus: "Approved",
  },

  {
    filename: "File 16",
    created: "01/01/2023",
    pendingDuration: "3 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 17",
    created: "01/02/2023",
    pendingDuration: "5 days",
    reviewStatus: "Approved",
  },
  {
    filename: "File 18",
    created: "01/03/2023",
    pendingDuration: "7 days",
    reviewStatus: "Rejected",
  },
  {
    filename: "File 19",
    created: "01/04/2023",
    pendingDuration: "9 days",
    reviewStatus: "Pending",
  },
  {
    filename: "File 20",
    created: "01/05/2023",
    pendingDuration: "11 days",
    reviewStatus: "Approved",
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

// Invoice processing metrics
router.get("/metrics", (req, res) => {
  res.json(metrics);
});

// source file table
router.get("/sourcefiles", (req, res) => {
  res.json(rows);
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
