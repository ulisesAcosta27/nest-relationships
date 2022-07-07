import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./schemas/task.schemas";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>
  ) {}

  async findAll() {
    return await this.taskRepository.find({ relations: { employee: true } });
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({
      where: { id },
      relations: { employee: true },
    });
  }

  async create(task: Task, idEmployee: any) {
    const taskInfo = this.taskRepository.create(task);
    taskInfo.employee = idEmployee
    return await this.taskRepository.save(taskInfo);
  }

  async delete(id: number) {
    return await this.taskRepository.delete(id);
  }
}
