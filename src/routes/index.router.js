import { Router } from "express";
import { companyRouter } from "./company.route.js";

export const routes = Router();

routes.use(companyRouter)