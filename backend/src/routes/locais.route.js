import { Router } from "express";
import { registerLocal, getAllLocais, upadateLocais, deleteLocais } from "../controllers/locais.controllers.js";

export const localRouter = Router();

localRouter.post("/registrar-local", registerLocal);
localRouter.get("/obter-locais", getAllLocais);
localRouter.put("/editar-local/:id", upadateLocais);
localRouter.delete("/deletar-local/:id", deleteLocais)
