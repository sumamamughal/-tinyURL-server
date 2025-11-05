import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./Utils/mongodb.js";
import URLRoutes from "./Routes/urls.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect DB
ConnectMongoDB();

// Test route
app.get("/api/message", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

// Routes
app.use("/url", URLRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
