import { IsMongoId } from 'class-validator';

export class CreatePostTagDto {
  @IsMongoId()
  readonly tag_id: string;
  @IsMongoId()
  readonly post_id: string;
}
