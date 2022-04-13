import { Module } from '@nestjs/common';
import { UserModule } from '../backend/user.module';
import { UserResolver } from './user-frontend.resolver';
@Module({
  imports: [UserModule],
  providers: [UserResolver],
  exports: [UserResolver],
})
export class UserFrontendModule {}
