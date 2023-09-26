import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Length, IsDate, IsEmail, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  First_name: string;

  @IsNotEmpty()
  Last_name: string;

  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsNumber()
  @IsNotEmpty()
  mobile_number: number;

  @IsNotEmpty()
  password: string;

  isActive: boolean; // No need for @IsNotEmpty because it's not required
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  DOB: string;
}
