import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.user;

  if (role !== "ADM") {
    throw new AppError("Access denied, for admins only", 401);
  }

  next();
};
