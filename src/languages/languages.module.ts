/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesSchema, LanguagesTranslations } from 'src/Schemas/languages.schema';


@Module({
  imports:[ MongooseModule.forFeature([{ name: LanguagesTranslations.name, schema: LanguagesSchema }]),
  ],
  controllers: [LanguagesController],
  providers: [LanguagesService]
})
export class LanguagesModule {}
