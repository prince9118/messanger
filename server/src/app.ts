import cors from "cors";
import express from "express";

export const app = express();

// Middleware runs in order for every request, before the route handlers.
app.use(cors()); // allow the browser app (another origin) to call this API
app.use(express.json()); // parse JSON bodies into req.body

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
