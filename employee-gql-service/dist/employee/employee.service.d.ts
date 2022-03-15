import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { EmployeeCreateDto } from './dto/create.employee.dto';
import { Employee } from './entity/employee.entity';
export declare class EmployeeService {
    private employeeRepository;
    private projectService;
    constructor(employeeRepository: Repository<Employee>, projectService: ProjectService);
    findAll(): Promise<Employee[]>;
    create(employeeDto: EmployeeCreateDto): Promise<Employee>;
    getProject(id: string): Promise<Project>;
    findOne(id: string): Promise<Employee>;
}
