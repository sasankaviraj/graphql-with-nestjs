import { Field, ObjectType } from "@nestjs/graphql";
import { Project } from "src/project/entities/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() //on start nestjs reads object types and generate gql schemas
@Entity()
export class Employee{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Field()
    @Column()
    firstName:string;
    @Column()
    @Field()
    lastName:string;
    @Column()
    @Field()
    designaion:string;
    @Column({nullable:true})
    @Field({nullable:true})
    city:string

    @ManyToOne(()=>Project,project=>project.employees)
    @Field(()=>Project)
    project:Project

    @Column() //this goes to database
    @Field()
    projectId:string
}