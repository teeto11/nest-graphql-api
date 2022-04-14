import { Injectable } from '@nestjs/common';
import { prisma, PrismaClient, Post } from '@prisma/client';
const primsa = new PrismaClient({
    log: [
        { level: 'query', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
      ],
})

@Injectable()
export class PostService {
    async createPost({title,content,userId}:{title:string,content:string,userId:number}):Promise<Post>{
        return primsa.post.create({
            data:{
                title,
                content,
                userId
            }
        })
    }
}
