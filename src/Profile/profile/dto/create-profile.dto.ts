import { IsNotEmpty } from "class-validator";

export class CreateProfileDto {
    
    @IsNotEmpty()
    userId: string;

    
    profile_pic:string
  
    
    isActive:boolean;
}
