import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './schemas/task.schemas';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), EmployeeModule],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
