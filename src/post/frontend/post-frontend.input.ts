import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()

export class PostFrontendInput{
    @Field(() => Int)
    userId:number
    @Field()
    title:string
    @Field()
    content:string
    @Field({nullable:true})
    published:boolean
}