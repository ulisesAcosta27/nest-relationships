import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./schemas/employee.schemas";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {}

  async create(employee: Employee) {
    const cInfo = this.employeeRepository.create(employee);
    return await this.employeeRepository.save(cInfo);
  }

  async findAll() {
    return this.employeeRepository.find({
      relations: {
        contactInfo: true,
        task: true,
        meetings: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne({
      where: { id },
      relations: {
        contactInfo: true,
        task: true,
        meetings: true,
      },
    });
  }

  async delete(id: number) {
    await this.employeeRepository.delete(id);
  }
}
