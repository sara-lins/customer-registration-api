import { User } from "@prisma/client";
import prisma from "./_index";

const updateUserService = async (id: string, dataUser): Promise<User> => {
  const userUpdated = await prisma.user.update({
    where: {
      id,
    },
    data: dataUser,
  });

  return userUpdated;
};

export default updateUserService;
