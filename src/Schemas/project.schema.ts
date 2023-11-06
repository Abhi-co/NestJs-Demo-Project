/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
//import { SoftwareEngineer } from '../software-eng/softwareEng.schema';


@Schema()
export class Project extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: String }] }) // Array of technology used in the project
  technologiesUsed: string[];

@Prop({ type: Types.ObjectId, ref: 'SoftwareEngineer' }) // Reference to SoftwareEngineer schema
engineer: Types.ObjectId;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
