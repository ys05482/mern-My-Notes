import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRouters from "./Routes/notesRouters.js";
import connectDB from "./config/db.js";
import rateLimiter from "./Middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = path.resolve();

app.use(express.json());
app.use(rateLimiter);

// Allow frontend during development
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use("/api/notes", notesRouters);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../frontend/notesProject/dist")),
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/notesProject/dist/index.html"),
    );
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
