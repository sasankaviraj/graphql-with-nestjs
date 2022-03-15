import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { EmployeeCreateDto } from './dto/create.employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';

@Resolver(()=>Employee)
export class EmployeeResolver {

    constructor(private employeeService: EmployeeService){}

    @Query(()=>[Employee], {name:"getAllEmployees"}) //output type employee
    findAll(){
        return this.employeeService.findAll();
    }

    @Mutation(()=>Employee,{name:"createEmployee"}) //to input use mutation. mention name to recognize which resolver to execute when it have multiple resolvers
    create(@Args('employee') employee: EmployeeCreateDto){
        return this.employeeService.create(employee);
    }

    @ResolveField(()=>Project) //output is Project
    project(@Parent() employee:Employee){ //method name should be same as Employee entity project variable name
      return this.employeeService.getProject(employee.projectId);
    }

    @Query(()=>Employee,{name:"findEmployee"})
    findOne(@Args('id') id:string) :Promise<Employee>{
      return this.employeeService.findOne(id);
    }
}


/*
---Query for input data---

mutation{
  createEmployee(employee:{
    firstName:"James"
    lastName:"Gorden"
    designaion:"Police Officer"
    city:"Gotham"
  }) {
    id
    firstName
  }
}

---Query for update data---

mutation {
  updateProject(updateProject:{
    id:"1f89f1e6-b8a9-4f33-ad90-b46752a3252d"
    name:"AIA Insurance"
    code:103
  }){
    name
  }
}

---Query for delete data---

mutation{
  removeProject(id:"c08d1502-3ceb-420a-b40d-b62051e59bc2"){
    name
  }
}

---Query for get data---

query{
  getAllEmployees{
    firstName
    lastName
    city
    designaion
    project{
      id
      name
      code
    }
    
  }
}


*/