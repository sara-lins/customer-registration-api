import { User } from "@prisma/client";
import { IUserResponse } from "../../interfaces/user";
import prisma from "./_index";

const retrieveUserService = async (): Promise<IUserResponse[]> => {
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

export default retrieveUserService;
