import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsTagsService } from './projects_tags.service';
import { CreateProjectsTagDto } from './dto/create-projects_tag.dto';
import { UpdateProjectsTagDto } from './dto/update-projects_tag.dto';

@Controller('projects-tags')
export class ProjectsTagsController {
  constructor(private readonly projectsTagsService: ProjectsTagsService) {}

  @Post()
  create(@Body() createProjectsTagDto: CreateProjectsTagDto) {
    return this.projectsTagsService.create(createProjectsTagDto);
  }

  @Get()
  findAll() {
    return this.projectsTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectsTagDto: UpdateProjectsTagDto) {
    return this.projectsTagsService.update(+id, updateProjectsTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsTagsService.remove(+id);
  }
}
