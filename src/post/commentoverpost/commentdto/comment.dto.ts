import { IsNotEmpty, IsString } from "class-validator";

export class usercommentdto{
    // @IsNotEmpty()
    // userId:string;

    @IsNotEmpty()
    postId:string;
    
        
    @IsNotEmpty()
    @IsString()
    comment: string;

}