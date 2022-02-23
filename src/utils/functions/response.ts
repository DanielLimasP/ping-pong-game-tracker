/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
export const response = (
  res: Response,
  code: number,
  msg: string,
  data: any,
  error: any
) => {
  if (error) {
    console.log(String(error));
  }
  return res.status(code).json({ msg, data, error });
};
