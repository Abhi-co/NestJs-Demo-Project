/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from '../Schemas/employees.schema';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from 'src/Dto/employees.dto';


@Injectable()
export class EmployeesService {

    constructor(@InjectModel(Employee.name) private readonly employeeModel: Model<Employee>) {}

      async create(employee: CreateEmployeeDto): Promise<Employee> {
      const createdEmployee = new this.employeeModel(employee);
      return createdEmployee.save();
      }
      

      async findAll(): Promise<Employee[]> {
        return this.employeeModel.find();
      }

      async update(id: string, emp: Employee): Promise<Employee> {
        return this.employeeModel.findByIdAndUpdate(id, emp,).exec();
      }

      async remove(id: string): Promise<Employee> {
        return this.employeeModel.findByIdAndRemove(id).exec();
      }

      //perform  aggregations 

//compare salary with given parameter if greter then shows data of employees

      async findEmployeesWithSalaryGreaterThan(salary: number): Promise<Employee[] |string> {
        try {
            const empdata =await this.employeeModel.find({ salary: { $gt: salary } }).exec();
            if(empdata.length===0){
                return 'No employees found with the given salary criteria.';
            }
            console.log(empdata); 
          return empdata;

        } catch (error) {
          throw new Error(`Error while fetching employees: ${error.message}`);
        }
    }


 //find employee details by using their age

  async getEmployeesByAge(age: number): Promise<Employee[]|string> {
    try {
    const empbyage = await this.employeeModel.find({ age: { $lt: age } }).exec();
    if(empbyage.length===0){
        return "No employees found with the given Age criteria."
    }
    else {
        return  empbyage;
    }
   }catch (error) {
    throw new Error(`Error while fetching employees: ${error.message}`);
   }
  }


 
 

  //find employees using age range 
  async getEmployeesByAgeRange(minAge: number, maxAge: number): Promise<Employee[] | string> {

    console.log('min',minAge);
    console.log('max',maxAge);
    const emp = await this.employeeModel.find({
        age: { $gte: minAge, $lte: maxAge },
      
    }).exec();
    if(emp.length===0){
        return "No employees found with the given Age criteria."
    }
    else{
        return emp;
    }
 

}

//   async getEmployeesByAgeRange(minAge: number, maxAge: number): Promise<Employee[] | string> {

//     console.log('min',minAge);
//     console.log('max',maxAge);
//     const emp = await this.employeeModel.aggregate([
//         {
//             $match: {
//               age: { $gt: minAge, $lt: maxAge },
//             },
//           },
//     ]).exec();
//       return emp;
//   }

  // Average Salary 
  async getAverage(): Promise<any> {
    const result = await this.employeeModel.aggregate([
      {
        $group: {
          _id: null,
          averageSalary: { $avg: '$salary' },
          averageAge:{$avg:'$age'}
        },
      },
    ]);
    const averageSalary = result[0]?.averageSalary || 0;
    const averageAge = result[0]?.averageAge || 0;

    // Extract and return the averageSalary value from the aggregation result
     return { averageSalary, averageAge };
  

  }


  

//pagination 

  async getEmployeesWithPagination(page: number, perPage: number): Promise<Employee[]> {
    console.log(page,perPage)
    const employees = await this.employeeModel.aggregate([
      {
        $skip: (page - 1) * +perPage,
      },
      {
        $limit: +perPage,
      },
    ]);

    return employees;
  }


  //populate()

        
}
