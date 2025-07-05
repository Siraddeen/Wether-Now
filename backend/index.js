import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());

// routes
import weatherRoutes from "./routes/weatherRoutes.js";
app.use("/api/weather", weatherRoutes);

app.use(express.static(path.join(__dirname, "frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
