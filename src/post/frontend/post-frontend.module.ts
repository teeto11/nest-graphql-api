import { Module } from '@nestjs/common';
import { PostFrontendResolver } from './post-frontend.resolver';
import { PostModule } from '../backend/post.module';

@Module({
    imports:[PostModule],
    providers:[PostFrontendResolver],
    exports:[PostFrontendResolver],
})
export class PostFrontendModule {}
