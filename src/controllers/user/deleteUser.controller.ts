import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  const { id: userId } = req.params;

  await deleteUserService(userId);

  return res.status(204).send();
};
