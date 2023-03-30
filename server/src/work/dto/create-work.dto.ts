import { IsDateString, IsString } from 'class-validator';

export class CreateWorkDto {
  @IsString()
  readonly company_name: string;

  @IsDateString()
  readonly from: Date;

  @IsDateString()
  readonly to: Date;

  @IsString()
  readonly position: string;
}
