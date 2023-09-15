import { z } from "zod";
import * as S from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import * as E from "../entities";

export type TUser = z.infer<typeof S.userSchema>;
export type TUserCreate = z.infer<typeof S.userCreateSchema>;
export type TUserReadAll = z.infer<typeof S.userReadAllSchema>;
export type TUserReturn = z.infer<typeof S.userReturnSchema>;
export type TUserBodyUpdate = Omit<TUserCreate, "admin">;

export type TUserUpdate = DeepPartial<TUserBodyUpdate>;
export type TUserRepo = Repository<E.User>;

export type TUserSchedule = z.infer<typeof S.userScheduleSchema>;
