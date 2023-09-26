import { Module } from "@nestjs/common";
import { commentdetail } from "./comment.model";
import { MongooseModule } from "@nestjs/mongoose";
import { authmodule } from "src/auth/auth.module";
import { UsercommentService } from "./comment.service";
import { usercommentController } from "./comment.controller";

@Module({
    imports:[authmodule,MongooseModule.forFeature([{ name:'commentschema', schema:commentdetail }])],
    controllers: [usercommentController],
    providers: [UsercommentService]
  })
  export class usercommentmodule {}