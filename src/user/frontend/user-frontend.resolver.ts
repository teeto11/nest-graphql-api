import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "../backend/user.service";
import { User } from "./user";
import { UserInput } from "./user-frontend.input";

@Resolver()
export class UserResolver{
    constructor(private readonly userService:UserService){}
    
    @Mutation(() => User, {name:'createUser'})
    async createUser(@Args('input')input:UserInput):Promise<User>{
        const user = await this.userService.createUser(input)
        return user
    }
}