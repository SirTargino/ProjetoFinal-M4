import { Router } from "express";
import { registerUsers, getAllUsers, upadateUser, deleteUser } from "../controllers/users.controllers.js";

export const UsersRouter = Router();

UsersRouter.post("/registrar-user", registerUsers);
UsersRouter.get("/obter-users", getAllUsers);
UsersRouter.put("/editar-user/:id", upadateUser);
UsersRouter.delete("/deletar-user/:id", deleteUser)