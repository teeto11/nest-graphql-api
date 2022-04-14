import { Args, Mutation, ResolveField, Resolver } from "@nestjs/graphql";
import { PostService } from "../backend/post.service";
import { Post } from "./post";
import { PostFrontendInput } from "./post-frontend.input";

@Resolver()
export class PostFrontendResolver {
    constructor(private readonly postService: PostService) {}

    @Mutation(() => Post , {name:'createPost'})
    async createPost(@Args('input')input:PostFrontendInput):Promise<Post>{
        const post = await this.postService.createPost(input)
        const {id,title,content,published}:{id:number,title:string,content:string,published:boolean} = post
        return new Post(id,title,content,published)
    }

}