import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { id: userId } = req.params;
  const { ...data } = req.body;

  const user = await updateUserService(userId, data);

  return res.status(200).json(user);
};

export default updateUserController;
