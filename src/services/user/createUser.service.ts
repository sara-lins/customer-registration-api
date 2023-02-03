import { User } from "@prisma/client";
import prisma from "./_index";

import { hash } from "bcryptjs";
import { IUser, IUserResponse } from "../../interfaces/user";

const createUserService = async (data: IUser): Promise<IUserResponse> => {
  const { email, fullname, password, phone, role, created_at, updated_at } =
    data;
  const user: IUserResponse = await prisma.user.create({
    data: {
      fullname,
      email,
      password: await hash(password, 10),
      phone,
      role,
      created_at,
      updated_at,
    },
  });

  delete user.password;

  return user;
};

export default createUserService;
