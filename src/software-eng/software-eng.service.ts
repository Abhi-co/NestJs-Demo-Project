/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SoftwareEngineer } from '../Schemas/softwareEng.schema';

@Injectable()
export class SoftwareEngineerService {
  constructor(@InjectModel(SoftwareEngineer.name) private engineerModel: Model<SoftwareEngineer>,) {}

  async create(engineerData: Partial<SoftwareEngineer>): Promise<SoftwareEngineer> {
    const createdEngineer = new this.engineerModel(engineerData);
    return createdEngineer.save();
  }

  async findAll(): Promise<SoftwareEngineer[]> {
    return this.engineerModel.find().exec();
  }
}

