import { HTTP_STATUS_CODES } from "../utils/constants/httpStatusCodes";
import { INTERNAL_SERVER_ERROR } from "../utils/constants/strings";
import { response } from "../utils/functions/response";
import { Request, Response } from "express";

const { OK, ERROR } = HTTP_STATUS_CODES;

export const downloadPostmanCollection = async (
  req: Request,
  res: Response
) => {
  try {
    const docPath = "./docs/score.postman_collection.json";
    return res.status(OK).download(docPath);
  } catch (error) {
    return response(res, ERROR, INTERNAL_SERVER_ERROR, {}, error);
  }
};
