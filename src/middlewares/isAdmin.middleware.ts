import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { admin }: { admin: boolean } = res.locals.decoded;
  if (!admin) throw new AppError("Insufficient permission", 403);

  return next();
};
