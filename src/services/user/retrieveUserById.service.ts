import { User } from "@prisma/client";
import prisma from "./_index";

const retrieveUserByIdService = async (id: string): Promise<User | null> => {
  const userById = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return userById;
};

export default retrieveUserByIdService;
