import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { PostService } from "src/post/backend/post.service";
import { Post } from "src/post/frontend/post";
import { UserService } from "../backend/user.service";
import { SingleUserFrontendInput } from "./single-user-frontend.input";
import { User } from "./user";
import { UserFrontendInput } from "./user-frontend.input";

@Resolver(() => User)
export class UserResolver{
    constructor(private readonly userService:UserService, private readonly postService:PostService){}
    
    @Mutation(() => User, {name:'createUser'})
    async createUser(@Args('input')input:UserFrontendInput):Promise<User>{
        const user = await this.userService.createUser(input)
        return user
    }
    @Query(() => User, {name:'user'})
    async getUser(@Args('input')input:SingleUserFrontendInput):Promise<User>{
        return this.userService.getUser(input.id)
    }
    @ResolveField(() => [Post], {name:'posts'})
    async getUserPosts(@Parent() user:User):Promise<Post[]>{
        return this.postService.getUserPosts(user.id)
    }
}