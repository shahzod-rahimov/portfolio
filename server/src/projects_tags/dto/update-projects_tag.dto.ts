import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectsTagDto } from './create-projects_tag.dto';

export class UpdateProjectsTagDto extends PartialType(CreateProjectsTagDto) {}
