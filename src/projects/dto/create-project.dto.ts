import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  readonly url: string;

  @IsOptional()
  @IsMongoId()
  readonly work_id: string;
}
