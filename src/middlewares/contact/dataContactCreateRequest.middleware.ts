import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

export const dataContactCreateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataContact = req.body;

  const correctKeys = ["fullname", "email", "phone"];

  let exists = true;

  for (const key in dataContact) {
    exists = correctKeys.includes(key);
    if (!exists) {
      break;
    }
  }

  if (!exists) {
    throw new AppError(
      "It's only possible create contact with properties: fullname, email and phone."
    );
  }

  next();
};
