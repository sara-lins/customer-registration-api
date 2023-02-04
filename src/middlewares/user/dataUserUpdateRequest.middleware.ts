import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

export const dataUserUpdateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataUser = req.body;

  const correctKeys = ["fullname", "email", "password", "phone"];

  let exists = true;

  for (const key in dataUser) {
    exists = correctKeys.includes(key);
    if (!exists) {
      break;
    }
  }

  if (!exists) {
    throw new AppError(
      "It's only possible update properties: fullname, email, password and phone."
    );
  }

  next();
};
