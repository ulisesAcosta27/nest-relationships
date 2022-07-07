import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MeetingModule } from './meeting/meeting.module';
import { TaskModule } from './task/task.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development"],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "charango",
      database: "test",
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EmployeeModule,
    ContactInfoModule,
    TaskModule,
    MeetingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
