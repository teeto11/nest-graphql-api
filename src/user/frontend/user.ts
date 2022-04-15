import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{
    readonly id:number
    @Field()
    readonly email:String
    @Field()
    readonly name:String
}