import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from '../../employee/schemas/employee.schemas';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendess: Employee[]

}
