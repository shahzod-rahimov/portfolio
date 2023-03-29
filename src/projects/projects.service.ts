import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectModel.create(createProjectDto);
  }

  findAll() {
    return this.projectModel.find({});
  }

  async findOne(id: string) {
    const project = await this.projectModel.findById(id);

    if (!project) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectModel.findByIdAndUpdate(
      id,
      updateProjectDto,
      {
        new: true,
      },
    );

    if (!project) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return project;
  }

  async remove(id: string) {
    const project = await this.projectModel.findByIdAndRemove(id);

    if (!project) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return project;
  }
}
