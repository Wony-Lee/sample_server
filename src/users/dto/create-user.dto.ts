import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly email: number;
  @IsString()
  readonly password: string;
}
