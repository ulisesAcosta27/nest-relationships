import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { ContactInfoService } from "./contact-info.service";
import { ContactInfo } from "./schemas/contact-info.schemas";
import { EmployeeService } from "../employee/employee.service";

@Controller("contact-info")
export class ContactInfoController {
  constructor(
    private readonly contactInfoService: ContactInfoService,
    private readonly employeeService: EmployeeService
  ) {}

  @Get()
  findAll() {
    return this.contactInfoService.findAll();
  }

  @Post("employee/:idEmployee")
  async create(
    @Body() contactInfo: ContactInfo,
    @Param("idEmployee")
    idEmployee: number
  ) {
    const getEmployee = await this.employeeService.findOne(idEmployee);
    if (!getEmployee) new NotFoundException("User not found");
    return this.contactInfoService.create(contactInfo, idEmployee);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.contactInfoService.delete(id);
  }
}
