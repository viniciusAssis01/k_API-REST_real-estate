import { Request, Response } from "express";
import * as S from "../services";
import * as I from "../interfaces";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryCreate: I.TCategory = await S.createCategoryService(req.body);

  return res.status(201).json(categoryCreate);
};

export const readAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const readAll: I.TCategoryReadAll = await S.readAllCategoryService();

  return res.status(200).json(readAll);
};

export const readAllRealEstateCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstatesCategory = await S.readAllRealEstatesCategoryService(id);
  return res.status(200).json(realEstatesCategory);
};
