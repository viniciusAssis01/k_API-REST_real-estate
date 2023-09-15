import { z } from "zod";
import * as S from "../schemas";
import { Repository } from "typeorm";
import * as E from "../entities";

export type TSchedule = z.infer<typeof S.scheduleDataSchema>;

export type TScheduleCreate = z.infer<typeof S.scheduleCreateSchema>;

export type TScheduleRead = z.infer<typeof S.schedulesReadSchema>;

export type TScheduleRepo = Repository<E.Schedule>;
