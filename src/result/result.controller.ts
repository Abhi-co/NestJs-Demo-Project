/* eslint-disable prettier/prettier */
import { Body, Controller, Post ,Get} from '@nestjs/common';
import { CalculatePercentageDto } from 'src/Dto/result.dto';
import { ResultService } from './result.service';


@Controller('result')
export class ResultController {
    constructor(private readonly resultService: ResultService) {}


 @Post('store-form-data')
async storeFormData(@Body() formData: CalculatePercentageDto) {
  const subjects = Object.keys(formData)
    .filter(key => key.startsWith('subject'))
    .map(key => ({
      subject: formData[key],
      marks: formData[`marks${key.substring(7)}`]
    }));

  await this.resultService.storeFormData(subjects);
}

@Get('calculate-percentages')
async calculatePercentages() {
  const percentages = await this.resultService.calculatePercentages();
  return percentages;
}




    
}
