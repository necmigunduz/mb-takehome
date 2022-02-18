// Index
import express from "express";
import apiRoutes from "../routes/routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Initialize app
let app = express();

// Use API routes
app.use("/api", apiRoutes);
// Setup server
let port = process.env.PORT || 4000;

// Configure body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });
let db = mongoose.connection;

// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Send message for homepage of API
app.get("/", (req, res) => {
  res.send("This is the homepage for the Restful API for products");
});

// Listen to the port
app.listen(port, function () {
  console.log("Api is running on port: " + port);
});
