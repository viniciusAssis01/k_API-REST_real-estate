import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as E from "./index";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, unique: true })
  name: string;

  @OneToMany(() => E.RealEstate, (realEstate) => realEstate.category)
  realEstate: E.RealEstate[];
}
