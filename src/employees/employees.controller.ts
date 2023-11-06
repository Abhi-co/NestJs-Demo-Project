/* eslint-disable prettier/prettier */
import { Body, Controller ,Post,Get, Put, Param, Delete, Query} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from '../Schemas/employees.schema';
import { CreateEmployeeDto } from 'src/Dto/employees.dto';


@Controller('app/api/v1')
export class EmployeesController {
    constructor(private readonly empserv: EmployeesService) {}


    

@Post('/AddEmployees')
async create(@Body() emp: CreateEmployeeDto): Promise<Employee> {
  return this.empserv.create(emp);
}

@Get('/getallEmployees')
async getallEmp():Promise<Employee[]>{
    return this.empserv.findAll();
}

@Put(':id')
async update(@Param('id') id: string, @Body() emp:Employee): Promise<Employee> {
  return this.empserv.update(id, emp);
}

@Delete(':id')
async remove(@Param('id') id: string): Promise<Employee> {
  return this.empserv.remove(id);
}

// Aggregations 

@Get('Gtsalary/:salary')
  async getEmployeesWithHighSalary(@Param('salary') salary: number): Promise<Employee[]|string> {
    return this.empserv.findEmployeesWithSalaryGreaterThan(salary);
  }

@Get('EmployeeByAge/:age')
  async getEmployeesByAge(@Param('age') age: number): Promise<Employee[] |string|object> {
    if(age>100)
    return { ErrorMsg:"Please Enter Valid Age" }
     else{
    return this.empserv.getEmployeesByAge(age);
     }
  }

  @Get('EmployeesByAgeRange/:min/:max')
  async getEmployeesByAgeRange( @Param('min') min: number, @Param('max') max: number,): Promise<Employee[]|string> {
    if (min < 18 || max > 100) {
        return "Please Enter a Valid Age Range (between 18 and 100)";
      } else {
        return this.empserv.getEmployeesByAgeRange(min, max);
      }
   
  }

  @Get('/Average')
  async getAverage(): Promise<any> {
    return this.empserv.getAverage();
  }




  //pagination 

  @Get('/paginate')
  async getEmployeesWithPagination(@Query('page') page :number ,@Query('perPage') perPage:number,): Promise<Employee[]> {
    return this.empserv.getEmployeesWithPagination(page, perPage);
  }
}
