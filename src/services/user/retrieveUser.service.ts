import { User } from "@prisma/client";
import prisma from "./_index";

const retrieveUserService = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();

  return users;
};

export default retrieveUserService;
