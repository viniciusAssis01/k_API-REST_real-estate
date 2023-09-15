import * as I from "../interfaces";
import * as E from "../entities";
import { AppError } from "../error";
import { realEstateRepository, scheduleRepository } from "../repositories";

export const createScheduleService = async (
  payloadReqBody: I.TSchedule,
  realEstateId: number,
  userId: number
): Promise<any> => {
  const scheduleDate: Date = new Date(payloadReqBody.date);
  const day: number = scheduleDate.getDay();

  const hour: number = Number(payloadReqBody.hour.substring(0, 2));

  if (day === 0 || day === 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);

  if (hour < 8 || hour > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  const foundRealEstate: E.RealEstate | null =
    await realEstateRepository.findOneBy({
      id: realEstateId,
    });
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  const createSchedule: E.Schedule = scheduleRepository.create({
    realEstate: foundRealEstate,
    user: { id: userId },
    date: payloadReqBody.date,
    hour: payloadReqBody.hour,
  });

  await scheduleRepository.save(createSchedule);

  return { message: "Schedule created" };
};

export const readSchedulesService = async (
  realEstateId: number
): Promise<E.RealEstate> => {
  const realEstate: E.RealEstate | null = await realEstateRepository.findOneBy({
    id: realEstateId,
  });
  if (!realEstate) throw new AppError("RealEstate not found", 404);

  const schedules: E.RealEstate | null = await realEstateRepository.findOne({
    where: { id: realEstateId },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });

  return schedules!;
};
