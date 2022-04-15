import { Injectable } from '@nestjs/common';
import { prisma, PrismaClient, User } from '@prisma/client';
const primsa = new PrismaClient({
    log: [
        { level: 'query', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
      ],
})

primsa.$on('query', async (e) => {
    console.log(`${e.query}`);
  })

@Injectable()
export class UserService {
    constructor(){}
    
     async createUser({name,email}:{name:string,email:string}):Promise<User>{
      return primsa.user.create({
           data:{
                name,
                email
           }
       })
    }
    async getUser(id:number):Promise<User>{
        return primsa.user.findFirst({
            where:{
                id
            }
        })
    }
}
