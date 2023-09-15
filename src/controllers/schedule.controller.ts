import { Request, Response } from "express";
import * as S from "../services";
import * as I from "../interfaces";
import * as E from "../entities"

export const createScheduleController = async (req: Request, res: Response) => {
  const userId: number = res.locals.decoded.sub;
  const { realEstateId, ...scheduleBody } = req.body;
  const schedules: I.TSchedule = await S.createScheduleService(
    scheduleBody,
    realEstateId,
    userId
  );
  return res.status(201).json(schedules);
};

export const readSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateId: number = Number(req.params.id);
  const schedules: E.RealEstate = await S.readSchedulesService(realEstateId);
  return res.status(200).json(schedules);
};
