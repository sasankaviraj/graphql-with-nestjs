import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>){}
  async create(createProjectInput: CreateProjectInput) :Promise<Project>{
    let project = this.projectRepository.create(createProjectInput);
    return await this.projectRepository.save(project); //you can directly use this without create. Depends on Dto
  }

  async findAll() :Promise<Project[]>{
    return await this.projectRepository.find({
      relations:["employees"] // specify the name here which added in the employee entity for employees array. and that has to come in an array
    });
  }

  async findOne(id: string) :Promise<Project>{
    return await this.projectRepository.findOne(id,{
      relations:["employees"]
    });
  }

  async update(id: string, updateProjectInput: UpdateProjectInput) {
    let project = this.projectRepository.create(updateProjectInput);
    project.id = id;
    return await this.projectRepository.save(project);
  }

  async remove(id: string) {
    let project = this.findOne(id);
    if(project){
      let del = await this.projectRepository.delete(id);
      if(del.affected === 1){
        return project;
      }
    }else{
      throw new NotFoundException('Record cannot find by the id ' + id);
    }
  }
}
