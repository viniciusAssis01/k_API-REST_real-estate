import * as I from "../interfaces";
import * as E from "../entities";

import {
  addressRepository,
  categoryRepository,
  realEstateRepository,
} from "../repositories";
import { AppError } from "../error";

export const createRealEstateService = async (
  payload: I.TRealEstateCreate
): Promise<I.TRealEstate> => {
  const { address, categoryId, ...realEstateBody } = payload;

  const foundAddress: E.Address | null = await addressRepository.findOneBy({
    street: address.street,
    zipCode: address.zipCode,
    city: address.city,
    state: address.state,
    number: address.number || "",
  });
  if (foundAddress) throw new AppError("Address already exists", 409);

  const addressCreata: E.Address = addressRepository.create(address);
  await addressRepository.save(addressCreata);

  const foundCategoryId: E.Category | null = await categoryRepository.findOneBy(
    {
      id: Number(categoryId),
    }
  );
  if (!foundCategoryId) {
    throw new AppError("Category not found", 404);
  }

  const realEstateCreate: E.RealEstate = realEstateRepository.create({
    ...realEstateBody,
    address: addressCreata,
    category: foundCategoryId,
  });
  await realEstateRepository.save(realEstateCreate);

  return realEstateCreate;
};

export const readAllRealEstateService =
  async (): Promise<I.TReadRealEstate> => {
    const realEstates: Array<E.RealEstate> = await realEstateRepository.find({
      relations: { address: true },
    });

    return realEstates;
  };
