import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{
    @Field()
    readonly email:String
    @Field()
    readonly name:String
}