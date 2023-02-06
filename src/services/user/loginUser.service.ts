import prisma from "./_index";
import { ILogin } from "../../interfaces/user";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

export const loginUserService = async ({
  email,
  password,
}: ILogin): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid User or Password", 403);
  }

  const isTruePassword = await compare(password, user!.password);

  if (!isTruePassword) {
    throw new AppError("Invalid User or Password", 403);
  }

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
