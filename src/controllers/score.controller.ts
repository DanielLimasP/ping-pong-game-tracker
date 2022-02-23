import { Request, Response } from "express";
import { HTTP_STATUS_CODES } from "../utils/constants/httpStatusCodes";
import { INTERNAL_SERVER_ERROR } from "../utils/constants/strings";
import { response } from "../utils/functions/response";
import { Score, TScoreDTO } from "../models/score.model";

const { OK, ERROR, CREATED } = HTTP_STATUS_CODES;

export const getScore = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const score = new Score();
    const data = await score.find(id);
    return response(res, OK, "Queried score", data, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const getScores = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    const data = await score.read();
    return response(res, OK, "Queried scores", data, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const postScore = async (req: Request, res: Response) => {
  const data: TScoreDTO = req.body;
  try {
    const score = new Score();
    const currentWinner = score.calcCurrentWinner(data);
    const winDiff = score.calcDiff(data);
    data.currentWinner = currentWinner;
    data.scoreDiff = winDiff;
    const result = await score.save(data);
    return response(res, CREATED, "Saved score", result, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const deleteScore = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const score = new Score();
    const collection = await score.delete(id);
    return response(res, OK, "", collection, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};
