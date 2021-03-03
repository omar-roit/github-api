import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    UserModule, EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
