import * as S from "../schemas";
import * as I from "../interfaces";
import * as E from "../entities";
import { userRepository } from "../repositories";

export const createUserService = async (
  payload: I.TUserCreate
): Promise<I.TUserReturn> => {
  const user: E.User = userRepository.create(payload);

  await userRepository.save(user);

  return S.userReturnSchema.parse(user);
};

export const readAllUsersService = async (): Promise<I.TUserReadAll> => {
  const users: Array<E.User> = await userRepository.find({ withDeleted: true });
  return S.userReadAllSchema.parse(users);
};

export const updateUserService = async (
  user: E.User,
  payloadReqBody: I.TUserUpdate
): Promise<I.TUserReturn> => {
  const updateUser: E.User = await userRepository.save({
    ...user,
    ...payloadReqBody,
  });

  return S.userReturnSchema.parse(updateUser);
};

export const deleteUserService = async (user: E.User): Promise<void> => {
  await userRepository.softRemove(user);
};
