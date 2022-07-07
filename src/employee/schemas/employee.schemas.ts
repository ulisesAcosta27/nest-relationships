import { ContactInfo } from "src/contact-info/schemas/contact-info.schemas";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Task } from "../../task/schemas/task.schemas";
import { Meeting } from '../../meeting/schemas/meeting.schemas';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.directReport, {
    onDelete: "SET NULL",
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directReport: Employee[];

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.employee)
  task: Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendess)
  @JoinTable()
  meetings: Meeting[]
}
