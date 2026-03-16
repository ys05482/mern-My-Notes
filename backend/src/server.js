import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRouters from "./Routes/notesRouters.js";
import connectDB from "./config/db.js";
import rateLimiter from "./Middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRouters);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
