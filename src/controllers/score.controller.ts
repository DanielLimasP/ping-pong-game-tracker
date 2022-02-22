import { Request, Response } from "express";
import { HTTP_STATUS_CODES } from "../utils/constants/httpStatusCodes";
import { INTERNAL_SERVER_ERROR } from "../utils/constants/strings";
import { response } from "../utils/functions/response";

const { OK, ERROR, CREATED } = HTTP_STATUS_CODES;

export const getScore = (req: Request, res: Response) => {
  try {
    return response(res, OK, "", {}, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const getScores = (req: Request, res: Response) => {
  try {
    return response(res, OK, "", {}, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const postScore = (req: Request, res: Response) => {
  try {
    return response(res, CREATED, "", null, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const putScore = (req: Request, res: Response) => {
  try {
    return response(res, OK, "", {}, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};

export const deleteScore = (req: Request, res: Response) => {
  try {
    return response(res, OK, "", {}, null);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, null, error);
  }
};
