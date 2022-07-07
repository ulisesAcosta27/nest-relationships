import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "src/employee/schemas/employee.schemas";

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  @Column()
  employeeId: number;

  @OneToOne(() => Employee, (employee) => employee.contactInfo, { onDelete: 'CASCADE' })
  @JoinColumn()
  employee: Employee;
}
