import { Router } from "express";
import { deleteCompany, getAllCompanies, registerCompany, updateCompany } from "../controllers/company.controllers.js";

export const companyRouter = Router();

companyRouter.post("/registrar-empresa", registerCompany);
companyRouter.get("/obter-empresas", getAllCompanies);
companyRouter.put("/editar-empresa", updateCompany);
companyRouter.delete("deletar-empresa", deleteCompany)