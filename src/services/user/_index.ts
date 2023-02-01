import { prisma } from "../../prisma";
import retrieveUserService from "./retrieveUser.service";
import retrieveUserByIdService from "./retrieveUserById.service";
import createUserService from "./createUser.service";
import updateUserService from "./updateUser.service";
import deleteUserService from "./deleteUser.service";

export {
  retrieveUserService,
  retrieveUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
};

export default prisma;
