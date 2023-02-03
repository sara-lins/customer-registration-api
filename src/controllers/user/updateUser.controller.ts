import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  const { id: userId } = req.params;
  const { ...data } = req.body;

  const userUpdated = await updateUserService(userId, data);

  return res.status(200).json(userUpdated);
};
