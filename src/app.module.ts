import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WorkModule } from './work/work.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsTagsModule } from './projects_tags/projects_tags.module';
import { TagsModule } from './tags/tags.module';
import { PostTagsModule } from './post_tags/post_tags.module';
import { PostsModule } from './posts/posts.module';
import { SocialsModule } from './socials/socials.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    UserModule,
    WorkModule,
    ProjectsModule,
    ProjectsTagsModule,
    TagsModule,
    PostTagsModule,
    PostsModule,
    SocialsModule,
  ],
})
export class AppModule {}
