import { Request, Response } from "express";
import * as S from "../services";
import * as I from "../interfaces";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: I.TRealEstate = await S.createRealEstateService(req.body);
  return res.status(201).json(realEstate);
};

export const readAllRealEsatatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const readAll: I.TReadRealEstate = await S.readAllRealEstateService();

  return res.status(200).json(readAll);
};
