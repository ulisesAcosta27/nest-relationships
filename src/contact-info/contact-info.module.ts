import { Module } from '@nestjs/common';
import { ContactInfoController } from './contact-info.controller';
import { ContactInfoService } from './contact-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './schemas/contact-info.schemas';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfo]), EmployeeModule],
  controllers: [ContactInfoController],
  providers: [ContactInfoService]
})
export class ContactInfoModule {}
