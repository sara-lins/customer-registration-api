import { Router } from "express";
import { createUserController } from "../../controllers/user/createUser.controller";
import { deleteContatoController } from "../../controllers/user/deleteUser.controller";
import { loginUserController } from "../../controllers/user/loginUser.controller";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller";
import { retrieveUserByIdController } from "../../controllers/user/retrieveUserById.controller";
import { updateUserController } from "../../controllers/user/updateUser.controller";

const usersRoutes = Router();

usersRoutes.get("/", retrieveUserController);
usersRoutes.get("/:id", retrieveUserByIdController);
usersRoutes.post("/register", createUserController);
usersRoutes.post("/login", loginUserController);
usersRoutes.patch("/:id", updateUserController);
usersRoutes.delete("/:id", deleteContatoController);

export default usersRoutes;
