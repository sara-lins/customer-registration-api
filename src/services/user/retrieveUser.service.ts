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

  const arrWithoutAdmin = users.filter((item) => {
    for (const key in item) {
      if (key === "role" && item[key] !== "ADM") {
        return item;
      }
    }
  });

  if (arrWithoutAdmin) {
    return arrWithoutAdmin;
  }

  return users;
};
