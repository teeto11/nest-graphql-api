import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserFrontendInput{
@Field()
 readonly email:string
 @Field()
 readonly name:string
}
