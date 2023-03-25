import { IsDate, IsDateString, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly fullname: string;

  @IsPhoneNumber('UZ')
  readonly phone_number: string;

  @IsString()
  readonly photo: string;

  @IsString()
  readonly cv_link: string;

  @IsDateString()
  readonly birth_date: Date;

  @IsString()
  readonly address: string;
}
