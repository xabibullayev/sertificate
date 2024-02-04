const mongoURI =
  "mongodb+srv://xabibullayevmm:6WD3d8Xd9GCxJCUL@itmatryoshkabot.fuq8ext.mongodb.net/sertificates?retryWrites=true&w=majority";
const PORT = 5000;

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import uploadRoute from "./routes/upload.js";
import studentRoute from "./routes/students.js";
import countRoute from "./routes/count.js";

const app = express();

app.use(express.json());
app.use(cors());

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "uploads")));

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/upload", uploadRoute);
app.use("/students", studentRoute);
app.use("/count", countRoute);

app.listen(PORT, () => {
  console.log(`Express server is running on ${PORT}`);
});
