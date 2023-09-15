import { z } from "zod";
import * as S from "./index";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(() => false),
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  address: z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullish(),
    city: z.string().max(20).nonempty(),
    state: z.string().max(2).nonempty(),
  }),
  category: S.categorySchema,
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export const realEstateCreateSchema = z.object({
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullish(),
    city: z.string().max(20).nonempty(),
    state: z.string().max(2).nonempty(),
  }),
  categoryId: z.number().int(),
});

export const readRealEstate = realEstateSchema.array();
