import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token || token === "Bearer") {
    throw new AppError("Access denied", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      throw new AppError("Invalid token", 401);
    }

    req.user = {
      id: decoded.sub,
      role: decoded.role,
    };

    return next();
  });
};
