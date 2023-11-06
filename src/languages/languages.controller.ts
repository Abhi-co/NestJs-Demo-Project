/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { LanguagesService } from './languages.service';

@Controller('languages')
export class LanguagesController {

    constructor(private readonly languagestrans: LanguagesService) {}

    @Get('/getalllanguages')
async getallEmp():Promise<any>{
    return this.languagestrans.findAll();
}

@Get(':language')
  async getLanguageData(@Param('language') language: string):Promise<any> {
    try {
      const data = await this.languagestrans.languges(language);
      return data;
    } catch (error) {
      return { error: 'An error occurred while fetching language data.' };
    }
  }

}
