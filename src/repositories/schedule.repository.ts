import { AppDataSource } from "../data-source";
import * as E from "../entities";
import * as I from "../interfaces";

export const scheduleRepository: I.TScheduleRepo = AppDataSource.getRepository(
  E.Schedule
);
