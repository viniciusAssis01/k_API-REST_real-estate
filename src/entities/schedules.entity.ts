import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import * as E from "./index";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => E.RealEstate, (realEstate) => realEstate.schedules)
  realEstate: E.RealEstate;

  @ManyToOne(() => E.User, (users) => users.schedules)
  user: E.User;
}
