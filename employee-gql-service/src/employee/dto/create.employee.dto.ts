import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EmployeeCreateDto{
    @Field()
    firstName:string;
    @Field()
    lastName:string;
    @Field()
    designaion:string;
    @Field({nullable:true})
    city:string
    @Field()
    projectId:string
}