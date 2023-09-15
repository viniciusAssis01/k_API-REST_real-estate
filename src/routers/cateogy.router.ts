import { Router } from "express";
import * as M from "../middlewares";
import * as C from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post("", M.verifyToken, M.isAdmin, C.createCategoryController);
categoryRouter.get("", C.readAllCategoriesController);
categoryRouter.get("/:id/realEstate", C.readAllRealEstateCategoryController);
