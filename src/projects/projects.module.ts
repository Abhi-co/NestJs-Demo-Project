/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '../Schemas/project.schema';

@Module({
  imports:[    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectsModule {}
