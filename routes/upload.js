import { Router } from "express";
import upload from "../controllers/upload.js";

const router = Router();

router.post("/", upload.single("file"), (req, res) => {
  console.log(req.body.lastname);

  res.json("File uploaded successfully!");
});

export default router;
