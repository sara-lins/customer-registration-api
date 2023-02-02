import { Request, Response } from "express";
import retrieveUserService from "../../services/user/retrieveUser.service";

const retrieveUserController = async (_: Request, res: Response) => {
  const user = await retrieveUserService();

  return res.status(200).json(user);
};

export default retrieveUserController;
