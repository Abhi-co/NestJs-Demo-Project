/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class result extends Document {
  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  marks: number;
}

export const ResultSchema = SchemaFactory.createForClass(result);
