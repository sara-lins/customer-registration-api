import { User } from "@prisma/client";
import prisma from "./_index";

const createUserService = async (data): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};

export default createUserService;
