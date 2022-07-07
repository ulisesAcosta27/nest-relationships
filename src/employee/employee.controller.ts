import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Employee } from './schemas/employee.schemas';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeService: EmployeeService) {}
  
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id') 
  findOne(@Param('id') id: number) {
    return this.employeeService.findOne(id)
  }

  @Post()
  create(@Body() employee: Employee) {
    return this.employeeService.create(employee);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.employeeService.delete(id);
  }
}
