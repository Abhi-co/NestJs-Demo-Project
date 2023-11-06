/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LanguagesTranslations } from 'src/Schemas/languages.schema';

@Injectable()
export class LanguagesService {
    constructor(@InjectModel(LanguagesTranslations.name) private readonly languagestrans: Model<any>) { }
    async findAll(): Promise<any> {
        return this.languagestrans.find();
    }

    async languges(language: string): Promise<any> {
        const filteredData = await this.languagestrans.aggregate([
            {
                $project: {
                    _id: 0, // Include the document ID
                    [language]: 1, // Include the specified language field
                },
            },
        ]);
        return filteredData
    }
}
