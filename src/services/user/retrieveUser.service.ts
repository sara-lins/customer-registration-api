import { IUserResponse } from "../../interfaces/user";
import prisma from "./_index";

export const retrieveUserService = async (): Promise<IUserResponse[]> => {
  const users: IUserResponse[] = await prisma.user.findMany();

  users.map((item) => {
    for (const key in item) {
      if (key === "password") {
        delete item[key];
      }
    }
  });

  return users;
};
