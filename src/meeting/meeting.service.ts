import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Meeting } from "./schemas/meeting.schemas";
import { Repository } from "typeorm";

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    private readonly meetingRepository: Repository<Meeting>
  ) {}

  async findAll() {
    return await this.meetingRepository.find({
      relations: { attendess: true },
    });
  }

  async findOne(id: number) {
    return await this.meetingRepository.findOne({
      where: { id },
      relations: { attendess: true },
    });
  }

  async create(meeting: Meeting, idEmployee: any) {
    const infoEmployee = this.meetingRepository.create(meeting);
    infoEmployee.attendess = idEmployee;
    return await this.meetingRepository.save(infoEmployee);
  }

  async delete(id: number) {
    return this.meetingRepository.delete(id);
  }
}
