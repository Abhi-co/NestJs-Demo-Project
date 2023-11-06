/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { SoftwareEngineer } from '../Schemas/softwareEng.schema';
import { SoftwareEngineerService } from './software-eng.service';


@Controller('engineers')
export class SoftwareEngineerController {
  constructor(private engineerService: SoftwareEngineerService) {}

  @Post()
  async create(@Body() engineerData: Partial<SoftwareEngineer>): Promise<SoftwareEngineer> {
    return this.engineerService.create(engineerData);
  }

  @Get()
  async findAll(): Promise<SoftwareEngineer[]> {
    return this.engineerService.findAll();
  }
}
