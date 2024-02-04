import { Router } from "express";
import { createStudent } from "../controllers/studens.js";

const router = Router();

router.post("/", createStudent);
// router.get("/", createStudent);
// router.get("/", createStudent);
// router.put("/", createStudent);
// router.delete("/", createStudent);

export default router;
