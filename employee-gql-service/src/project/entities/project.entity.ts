import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entity/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Field()
  @Column()
  name:string
  @Field(()=>Int)
  @Column()
  code:number

  @OneToMany(()=>Employee, employee=>employee.project)
  @Field(()=>[Employee],{nullable:true}) //should have the Employee[] return type and should be nullable cause there can be projects without an employee
  employees: Employee[]
}
