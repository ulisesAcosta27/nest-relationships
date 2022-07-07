import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  NotFoundException,
} from "@nestjs/common";
import { MeetingService } from "./meeting.service";
import { Meeting } from "./schemas/meeting.schemas";
import { EmployeeService } from "../employee/employee.service";

@Controller("meeting")
export class MeetingController {
  constructor(
    private readonly meetingService: MeetingService,
    private readonly employeeService: EmployeeService
  ) {}

  @Get()
  findAll() {
    return this.meetingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.meetingService.findOne(id);
  }

  @Post("employee/:idEmployee")
  async create(
    @Body() meeting: Meeting,
    @Param("idEmployee") idEmployee: number
  ) {
    const getEmployee = await this.employeeService.findOne(idEmployee);
    if (!getEmployee) new NotFoundException("User not found");
    return this.meetingService.create(meeting, idEmployee);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.meetingService.delete(id);
  }
}
