import { hash } from "bcryptjs";
import { AppError } from "../../errors/AppError";
import { IUserDataUpdate, IUserResponse } from "../../interfaces/user";
import prisma from "./_index";
import "express-async-errors";

export const updateUserService = async (
  id: string,
  dataUser: IUserDataUpdate
): Promise<IUserResponse> => {
  const isExistsPassword: boolean = dataUser.hasOwnProperty("password");

  if (isExistsPassword) {
    dataUser.password = (await hash(dataUser.password!!, 10)).toString();
  }

  const userUpdated: IUserResponse = await prisma.user.update({
    where: {
      id,
    },
    data: dataUser,
  });

  delete userUpdated.password;

  return userUpdated;
};
