/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SoftwareEngineer extends Document{
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: String }] }) // Array of known technologies
  knownTechnologies: string[];
}

export const SoftwareEngineerSchema = SchemaFactory.createForClass(SoftwareEngineer);
