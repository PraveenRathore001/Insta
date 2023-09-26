import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CloudinaryProvider } from "src/cloudinary_imgstorage/cloudinary.provider";
import { CloudinaryService } from "src/cloudinary_imgstorage/cloudinary.service";
import { CloudinaryModule } from "src/cloudinary_imgstorage/cloudinary.module";
import { authmodule } from "src/auth/auth.module";
import { userPostController } from "./post.controller";
import { postDetails } from "./post.model";
import { UserPostService } from "./post.service";




@Module({
    imports:[authmodule,MongooseModule.forFeature([{ name:'postschema', schema:postDetails }]),CloudinaryModule],
    controllers: [userPostController],
    providers: [UserPostService]
  })
  export class userpostmodule {}
