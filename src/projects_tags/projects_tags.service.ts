import { Injectable } from '@nestjs/common';
import { CreateProjectsTagDto } from './dto/create-projects_tag.dto';
import { UpdateProjectsTagDto } from './dto/update-projects_tag.dto';

@Injectable()
export class ProjectsTagsService {
  create(createProjectsTagDto: CreateProjectsTagDto) {
    return 'This action adds a new projectsTag';
  }

  findAll() {
    return `This action returns all projectsTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectsTag`;
  }

  update(id: number, updateProjectsTagDto: UpdateProjectsTagDto) {
    return `This action updates a #${id} projectsTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectsTag`;
  }
}
