import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: "*"
  })
);

/**
 * GET latest engineering metrics
 */
app.get("/api/engineering-metrics", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM engineering_metrics
      ORDER BY snapshot_date DESC
      LIMIT 1
    `);

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching metrics:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
