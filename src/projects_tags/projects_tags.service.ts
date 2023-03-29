import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectsTagDto } from './dto/create-projects_tag.dto';
import { UpdateProjectsTagDto } from './dto/update-projects_tag.dto';
import {
  ProjectsTag,
  ProjectsTagDocument,
} from './entities/projects_tag.entity';

@Injectable()
export class ProjectsTagsService {
  constructor(
    @InjectModel(ProjectsTag.name)
    private projectTagModel: Model<ProjectsTagDocument>,
  ) {}
  create(createProjectsTagDto: CreateProjectsTagDto) {
    return this.projectTagModel.create(createProjectsTagDto);
  }

  findAll() {
    return this.projectTagModel.find({});
  }

  async findOne(id: string) {
    const projectTag = await this.projectTagModel.findById(id);

    if (!projectTag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return projectTag;
  }

  async update(id: string, updateProjectsTagDto: UpdateProjectsTagDto) {
    const updatedetData = await this.projectTagModel.findByIdAndUpdate(
      id,
      updateProjectsTagDto,
      {
        new: true,
      },
    );

    if (!updatedetData) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return updatedetData;
  }

  async remove(id: string) {
    const projectTag = await this.projectTagModel.findByIdAndRemove(id);

    if (!projectTag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return projectTag;
  }
}
