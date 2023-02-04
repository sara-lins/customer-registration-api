import { User } from "@prisma/client";
import prisma from "./_index";
import { ILogin } from "../../interfaces/user";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUserService = async ({
  email,
  password,
}: ILogin): Promise<string> => {
  email.length === 0 && console.log(email);
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const isTruePassword = await compare(password, user!.password);

  console.log(isTruePassword);

  return jwt.sign(
    {
      role: user?.role,
      phone: user?.phone,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
};
