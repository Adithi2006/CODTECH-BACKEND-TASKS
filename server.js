const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("Database Error:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("E-commerce Backend Running Successfully");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
