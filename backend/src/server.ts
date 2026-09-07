import express from "express";
import cors from "cors";
import { pool } from "./database.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");

    res.json({
      status: "ok",
      message: "PuzzleQuest backend is running",
      database: "connected",
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    res.status(500).json({
      status: "error",
      message: "Database connection failed",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `PuzzleQuest backend running on port ${PORT}`
  );
});