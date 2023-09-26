import { Body, Controller, Post, Request, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/auth/auth.guard";
import * as jwt from 'jsonwebtoken';
import { UserPostService } from "./post.service";
import { postDto } from "./post.dto.ts/post.dto";


@Controller('userpost')
export class userPostController {
  constructor(private readonly userPostservice: UserPostService) {}

  @UseGuards(JwtAuthGuard)
  @Post("addpost")
  @UseInterceptors(FileInterceptor('post'))
                                                                          // 'image' should match the field name in your form data
async addpost(
    @UploadedFile() file: Express.Multer.File,
    @Body() postuserdto: postDto ,// You should define CreateProfileDto
    @Request() req:any
  ){
    console.log("hello guys");
    const id=this.id_fromtoken(req)
    return this.userPostservice.addPost(file,postuserdto,id)
  }

  
  private id_fromtoken(req){
    try {
      const token= req.headers.authorization.split(" ")[1]
      const payload = jwt.decode(token)
      const id= payload.sub
    return id
    } catch (error) {
      
    }
    }




}