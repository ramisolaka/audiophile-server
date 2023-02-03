const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
// middleware ...
app.use(cors());
app.use("/assets", express.static("assets"));

// load env files ....
dotenv.config({ path: "./config.env" });

// get products ...
const PRODUCTS = require("./data.json");

app.get("/products", function getProducts(req, res) {
  try {
    res.status(200).json({ PRODUCTS });
  } catch (err) {
    res.status(400).json({ message: "fail" });
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is running");
});
