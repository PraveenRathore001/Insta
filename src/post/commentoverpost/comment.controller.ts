import { Request,Body, Controller, Post, UseGuards } from "@nestjs/common";
import { usercommentdto } from "./commentdto/comment.dto";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/auth.guard";
import * as jwt from 'jsonwebtoken';
import { UsercommentService } from "./comment.service";


@Controller('comment')
export class usercommentController {
  constructor(private readonly usercommentservice: UsercommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post("addcomment")
 async addcomment(@Body() usercommentdto:usercommentdto,
  @Request() req:any){
    const id=this.id_fromtoken(req)
    return this.usercommentservice.postComment(usercommentdto,id)
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