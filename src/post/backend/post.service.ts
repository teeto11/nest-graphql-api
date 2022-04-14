import { Injectable } from '@nestjs/common';
import { prisma, PrismaClient, Post } from '@prisma/client';
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
export class PostService {
    async createPost({title,content,userId,published}:{title:string,content:string,userId:number,published?:boolean}):Promise<Post>{
        return primsa.post.create({
            data:{
                title,
                content,
                userId,
                published
            }
        })
    }
}
