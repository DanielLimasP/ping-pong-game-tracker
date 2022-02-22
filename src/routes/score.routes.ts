import {
  getScore,
  getScores,
  postScore,
  putScore,
  deleteScore,
} from "../controllers/score.controller";
import { Router } from "express";

const router = Router();

router.get("/", getScore);
router.get("/:id", getScores);
router.post("/", postScore);
router.put("/:id", putScore);
router.delete("/:id", deleteScore);

export default router;
