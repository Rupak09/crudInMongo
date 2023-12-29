const express = require("express");
const app = express();
const employees = require("./routes/employeeRoutes");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

// Routes
app.use("/api/employees", employees);

// Main

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to the database");
    } catch (err) {
        console.error(err);
    }
}

start(); // Start the server after the database is connected

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
