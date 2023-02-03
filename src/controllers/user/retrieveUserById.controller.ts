import { Request, Response } from "express";
import retrieveUserByIdService from "../../services/user/retrieveUserById.service";

export const retrieveUserByIdController = async (
  req: Request,
  res: Response
) => {
  const { id: userId } = req.params;

  const user = await retrieveUserByIdService(userId);

  return res.status(200).json(user);
};
