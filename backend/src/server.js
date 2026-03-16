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

if (process.env.NODE_ENV === "!production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRouters);

app.use(express.static(path.join(__dirname, "../frontend/notesProject/dist")));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend", "notesProject", "dist", "index.html"),
    );
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
