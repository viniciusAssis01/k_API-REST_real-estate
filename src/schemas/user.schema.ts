import { z } from "zod";
import * as S from "./index";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(50).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

export const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userReturnSchema = userSchema.omit({ password: true });
export const userReadAllSchema = userReturnSchema.array();

export const userUpdateSchema = userCreateSchema
  .omit({ admin: true })
  .partial();

export const userScheduleSchema = userReturnSchema.extend({
  schedules: S.scheduleSchema,
});
