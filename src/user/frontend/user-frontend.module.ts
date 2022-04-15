import { Module } from '@nestjs/common';
import { UserModule } from '../backend/user.module';
import { UserResolver } from './user-frontend.resolver';
import { PostModule } from 'src/post/backend/post.module';
@Module({
  imports: [UserModule,PostModule],
  providers: [UserResolver],
  exports: [UserResolver],
})
export class UserFrontendModule {}
