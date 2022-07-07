import { Module } from '@nestjs/common';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meeting } from './schemas/meeting.schemas';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Meeting]), EmployeeModule],
  controllers: [MeetingController],
  providers: [MeetingService]
})
export class MeetingModule {}
