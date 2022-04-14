import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field(() => Int)
    readonly id: number;
    
    @Field()
    readonly title: string;
    
    @Field()
    readonly content: string;
    
    @Field()
    readonly published: boolean;
    
    constructor(id: number, title: string, content: string, published: boolean) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.published = published;
    }
}