import { Module } from '@nestjs/common';
import { ProjectsTagsService } from './projects_tags.service';
import { ProjectsTagsController } from './projects_tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsTag, ProjectsTagSchema } from './entities/projects_tag.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProjectsTag.name, schema: ProjectsTagSchema },
    ]),
  ],
  controllers: [ProjectsTagsController],
  providers: [ProjectsTagsService],
})
export class ProjectsTagsModule {}
