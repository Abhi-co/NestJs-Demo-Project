/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  dob: Date;
  @Prop({ required: true })
  salary: number;
  @Prop({ required: true })
  contact: number;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;

  // Define more properties as needed
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
