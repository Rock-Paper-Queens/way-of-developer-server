import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot('FILL_ME_IN'),
    AuthModule,
    PostModule,
    CommentsModule,
  ],
})
export class AppModule {}
