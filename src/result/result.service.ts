/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { result } from 'src/Schemas/result.schema';


@Injectable()
export class ResultService {


    constructor(@InjectModel(result.name) private subjectModel: Model<result>) {}

    async storeFormData(data: { subject: string; marks: number }[]): Promise<void> {
      const subjects = data.map(item => new this.subjectModel(item));
      await this.subjectModel.insertMany(subjects);
    
}

async calculatePercentages(): Promise<{ subject: string; percentage: number }[]> {
    const subjects = await this.subjectModel.find().exec();
    const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);
  
    const percentages = subjects.map(subject => ({
      subject: subject.subject,
      percentage: (subject.marks / totalMarks) * 100
    }));
  
    return percentages;
  }

}