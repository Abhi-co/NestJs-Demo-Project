/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { Project } from '../Schemas/project.schema';


@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post('/Add')
  async create(@Body() projectData: Partial<Project>): Promise<Project> {
    return this.projectService.create(projectData);
  }

  @Get('/fetchproject')
  async findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }
}
