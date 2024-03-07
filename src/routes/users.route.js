import { Router } from "express";
import { registerUser, getAllUsers, upadateUser, deleteUser } from "../controllers/users.controllers.js";

export const UsersRouter = Router();

UsersRouter.post("/registrar-user", registerUser);
UsersRouter.get("/obter-users", getAllUsers);
UsersRouter.put("/editar-user", upadateUser);
UsersRouter.delete("/deletar-user", deleteUser)
