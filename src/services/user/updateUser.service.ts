import { hash } from "bcryptjs";
import { IUserDataUpdate, IUserResponse } from "../../interfaces/user";
import prisma from "./_index";
import { AppError } from "../../ErrorException/AppError";

const updateUserService = async (
  id: string,
  dataUser: IUserDataUpdate
): Promise<IUserResponse> => {
  console.log(Object.keys(dataUser));

  const arrKeysDataUser = Object.keys(dataUser);
  for (const key in dataUser) {
    for (let i = 0; i <= arrKeysDataUser.length; i++) {
      if (key != arrKeysDataUser[i]) {
        throw new AppError(
          "It's only possible update properties: fullname, email, password and phone."
        );
      }
    }
  }

  const isExistsPassword: boolean = dataUser.hasOwnProperty("password");

  if (isExistsPassword) {
    dataUser.password = (await hash(dataUser.password!!, 10)).toString();
  }

  console.log(dataUser);

  const userUpdated: IUserResponse = await prisma.user.update({
    where: {
      id,
    },
    data: dataUser,
  });

  delete userUpdated.password;

  return userUpdated;
};

export default updateUserService;
