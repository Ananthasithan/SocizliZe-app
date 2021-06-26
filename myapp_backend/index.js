const express = require("express");
const app = express();
const router = require("./routes/router");

const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

app.use(helmet());
app.use(morgan("common"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", router);

app.listen(3000, () => console.log("Server started listening on port 6666"));
