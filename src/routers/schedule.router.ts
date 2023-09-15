import { Router } from "express";
import * as M from "../middlewares";
import * as S from "../schemas";
import * as C from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  M.verifyToken,
  M.validateBody(S.scheduleCreateSchema),
  M.verifyScheduleExists,
  M.verifyScheduleAndUser,
  C.createScheduleController
);

scheduleRouter.get(
  "/realEstate/:id",
  M.verifyToken,
  M.isAdmin,
  M.isAdminOrOwner,
  C.readSchedulesController
);
