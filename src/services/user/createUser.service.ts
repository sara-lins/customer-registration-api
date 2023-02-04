import prisma from "./_index";
import { hash } from "bcryptjs";
import { IUser, IUserResponse } from "../../interfaces/user";
import { AppError } from "../../errors/AppError";

export const createUserService = async (
  data: IUser
): Promise<IUserResponse> => {
  const { email, fullname, password, phone, role, created_at, updated_at } =
    data;

  const isEmailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isEmailExists) {
    throw new AppError("Email is already exists");
  }

  const isPhoneExists = await prisma.user.findUnique({
    where: {
      phone,
    },
  });

  if (isPhoneExists) {
    throw new AppError("Phone is already exists");
  }

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
