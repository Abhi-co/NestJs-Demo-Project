/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from '../Schemas/employees.schema';

@Module({
  imports:[    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
