import { IsString } from 'class-validator';

export class CreateSocialDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly url: string;

  @IsString()
  readonly icon: string;
}
