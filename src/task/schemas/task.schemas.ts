import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from '../../employee/schemas/employee.schemas';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.task, { onDelete: 'SET NULL' })
  employee: Employee
}
