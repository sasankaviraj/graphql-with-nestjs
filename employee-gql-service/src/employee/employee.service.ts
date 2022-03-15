import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { EmployeeCreateDto } from './dto/create.employee.dto';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee>,private projectService:ProjectService){}

    async findAll() :Promise<Employee[]>{
        return await this.employeeRepository.find();
    }

    //you cannot use same entity to create and retrieve data. you need to have seperate entities.
    async create(employeeDto:EmployeeCreateDto) :Promise<Employee>{
         let emp = await this.employeeRepository.create(employeeDto); //to creates single dto for input and output
         return this.employeeRepository.save(emp);
    }

    async getProject(id:string): Promise<Project>{
        return await this.projectService.findOne(id);
    }

    async findOne(id:string) :Promise<Employee>{
        return await this.employeeRepository.findOne(id);
    }
}
