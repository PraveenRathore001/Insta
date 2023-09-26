import { IsEmail, IsNotEmpty } from "class-validator";

export class userloginDTo{
    @IsEmail()
   @IsNotEmpty()
   Email: string;
   
  @IsNotEmpty()
  password: string;
}