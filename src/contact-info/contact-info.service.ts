import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ContactInfo } from "./schemas/contact-info.schemas";
import { Repository } from "typeorm";

@Injectable()
export class ContactInfoService {
  constructor(
    @InjectRepository(ContactInfo)
    private readonly contactInfoRepository: Repository<ContactInfo>
  ) {}

  async create(contactInfo: ContactInfo, idEmployee: any) {
    const cInfo = this.contactInfoRepository.create(contactInfo);
    cInfo.employee = idEmployee
    return await this.contactInfoRepository.save(cInfo);
  }

  async findAll() {
    return this.contactInfoRepository.find({ relations: { employee: true } });
  }

  async delete(id: number) {
    await this.contactInfoRepository.delete(id)
  }
}
