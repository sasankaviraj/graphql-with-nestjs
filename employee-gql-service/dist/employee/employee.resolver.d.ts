import { Project } from 'src/project/entities/project.entity';
import { EmployeeCreateDto } from './dto/create.employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    create(employee: EmployeeCreateDto): Promise<Employee>;
    project(employee: Employee): Promise<Project>;
    findOne(id: string): Promise<Employee>;
}
