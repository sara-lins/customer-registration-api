import { User } from "@prisma/client";
import { IUserResponse } from "../../interfaces/user";
import prisma from "./_index";

const retrieveUserByIdService = async (id: string): Promise<IUserResponse> => {
  const userById: IUserResponse | null = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  delete userById?.password;

  return userById!!;
};

export default retrieveUserByIdService;
