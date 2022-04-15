import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class SingleUserFrontendInput {
@Field(() => Int)
 readonly id:number

}
