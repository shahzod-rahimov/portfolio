import { IsMongoId } from 'class-validator';

export class CreateProjectsTagDto {
  @IsMongoId()
  readonly project_id: string;

  @IsMongoId()
  readonly tag_id: string;
}
