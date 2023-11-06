/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';
import { SoftwareEngModule } from './software-eng/software-eng.module';
import { ResultModule } from './result/result.module';
import { LanguagesModule } from './languages/languages.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Test'),
    EmployeesModule,
    ProjectsModule,
    SoftwareEngModule,
    ResultModule,
    LanguagesModule,
   
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
