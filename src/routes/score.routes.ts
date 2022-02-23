import {
  getScore,
  getScores,
  postScore,
  deleteScore,
} from "../controllers/score.controller";
import { Router } from "express";

const router = Router();

router.get("/", getScores);
router.get("/:id", getScore);
router.post("/", postScore);
router.delete("/:id", deleteScore);

export default router;
