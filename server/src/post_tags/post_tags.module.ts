import { Module } from '@nestjs/common';
import { PostTagsService } from './post_tags.service';
import { PostTagsController } from './post_tags.controller';
import { PostTag, PostTagSchema } from './entities/post_tag.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PostTag.name, schema: PostTagSchema }]),
  ],
  controllers: [PostTagsController],
  providers: [PostTagsService],
})
export class PostTagsModule {}
