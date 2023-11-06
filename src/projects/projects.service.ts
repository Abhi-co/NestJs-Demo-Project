/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../Schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private projectModel: Model<Project>) {}

  async create(projectData: Partial<Project>): Promise<Project> {
    const createdProject = new this.projectModel(projectData);
    return createdProject.save();
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().populate('engineer').exec();
  }
}
