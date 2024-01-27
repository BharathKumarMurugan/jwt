const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;

mongoose
.connect(MONGO_URL)
.then(() => console.log("mongodb connected"))
.catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:4001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);