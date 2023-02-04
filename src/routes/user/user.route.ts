import { Router } from "express";
import { createUserController } from "../../controllers/user/createUser.controller";
import { deleteUserController } from "../../controllers/user/deleteUser.controller";
import { loginUserController } from "../../controllers/user/loginUser.controller";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller";
import { retrieveUserByIdController } from "../../controllers/user/retrieveUserById.controller";
import { updateUserController } from "../../controllers/user/updateUser.controller";
import { authToken } from "../../middlewares/globals/authToken.middleware";
import { dataUserCreateRequest } from "../../middlewares/user/dataUserCreateRequest.middleware";
import { dataUserUpdateRequest } from "../../middlewares/user/dataUserUpdateRequest.middleware";
import { isUserIdExists } from "../../middlewares/user/isUserExists.middleware";

const usersRoutes = Router();

usersRoutes.get("", retrieveUserController);
usersRoutes.get("/:id", isUserIdExists, retrieveUserByIdController);
usersRoutes.post("/register", dataUserCreateRequest, createUserController);
usersRoutes.post("/login", loginUserController);
usersRoutes.patch(
  "/:id",
  authToken,
  isUserIdExists,
  dataUserUpdateRequest,
  updateUserController
);
usersRoutes.delete("/:id", authToken, isUserIdExists, deleteUserController);

export default usersRoutes;
