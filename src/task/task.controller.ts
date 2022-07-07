import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { EmployeeService } from "src/employee/employee.service";
import { Task } from "./schemas/task.schemas";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly employeeService: EmployeeService
  ) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.taskService.findOne(id);
  }

  @Post("employee/:idEmployee")
  async create(@Body() task: Task, @Param("idEmployee") idEmployee: number) {
    const getEmployee = await this.employeeService.findOne(idEmployee)
    if(!getEmployee) new NotFoundException("User not found"); 
    return this.taskService.create(task, idEmployee);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.taskService.delete(id);
  }
}
