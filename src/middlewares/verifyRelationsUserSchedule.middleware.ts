import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { scheduleRepository } from "../repositories";
import * as E from "../entities";

export const verifyScheduleAndUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = res.locals.decoded.sub;
  const date: Date | string = req.body.date;
  const hour: Date | string = req.body.hour;
  console.log(id, date, hour);

  const userSchedules: E.Schedule | null = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.userId = :userId", { userId: id })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();
  if (userSchedules)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
