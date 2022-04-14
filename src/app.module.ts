import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, Query, Resolver } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PostModule } from './post/backend/post.module';
import { UserModule } from './user/backend/user.module';
import { UserFrontendModule } from './user/frontend/user-frontend.module';
import { PostFrontendModule } from './post/frontend/post-frontend.module';

@Resolver()
export class TempResolver {
  @Query(() => String)
  sayHello() {
    return 'hello';
  }
}
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile:'lib/graphql/schema.graphql'
    }),
    PostModule,
    UserModule,
    UserFrontendModule,
    PostFrontendModule
  ],
  controllers: [AppController],
  providers: [AppService,TempResolver],
})
export class AppModule { }
