/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsDate, IsEmail, Min, Length, } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsDate()
  dob: Date;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  salary: number;

  @IsNotEmpty()
  @IsNumber()
  @Length(10)
  contact: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8)  
  password: string;
}