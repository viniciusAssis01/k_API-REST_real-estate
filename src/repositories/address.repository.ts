import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import * as E from "../entities";

export const addressRepository: Repository<E.Address> =
  AppDataSource.getRepository(E.Address);
