import { Router } from "express";
import { companyRouter } from "./company.route.js";
import { localRouter } from "./locais.route.js";
import { UsersRouter } from "./users.route.js";

export const routes = Router();


routes.use(companyRouter)
routes.use(localRouter)
routes.use(UsersRouter)