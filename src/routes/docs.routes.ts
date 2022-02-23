import { Router } from "express";
import { downloadPostmanCollection } from "../controllers/docs.controller";

const router = Router();

router.get("/", downloadPostmanCollection);

export default router;
