import { Router } from "express";
import { getCount } from "../controllers/count.js";

const router = Router();

router.get("/", getCount);

export default router;
