import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

export const app = express();

// Middleware runs in order for every request, before the route handlers.
app.use(cors({ origin: env.CLIENT_URL })); // only our frontend may call the API from a browser
app.use(express.json()); // parse JSON bodies into req.body

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// These two must come LAST: after every route has had a chance to match.
app.use(notFound);
app.use(errorHandler);
