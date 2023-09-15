import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().max(45),
  hour: z.string().nonempty(),
  userId: z.number(),
  realEstateId: z.number(),
});

export const scheduleDataSchema = scheduleSchema.omit({
  id: true,
  userId: true,
  realEstateId: true,
});

export const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});

export const schedulesReadSchema = scheduleSchema.array();
