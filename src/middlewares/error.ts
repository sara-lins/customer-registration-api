import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export const errorMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: "Error",
    message: "Internal server error",
  });
};
