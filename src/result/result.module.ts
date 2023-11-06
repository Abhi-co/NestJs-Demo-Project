/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultSchema, result } from 'src/Schemas/result.schema';


@Module({

  imports: [MongooseModule.forFeature([{ name: result.name, schema: ResultSchema }])],

  controllers: [ResultController],
  providers: [ResultService]
})
export class ResultModule {}
