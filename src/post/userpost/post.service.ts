import { BadRequestException, Injectable } from "@nestjs/common";
import { CloudinaryService } from "src/cloudinary_imgstorage/cloudinary.service";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Userpostmodel } from "../userpost/post.model";


@Injectable()
export class UserPostService {

  constructor(@InjectModel('postschema') private userpostschema:Model<Userpostmodel>,private cloudinary: CloudinaryService  ){}


  async addPost(file:Express.Multer.File,postuserdto,id) {
    const imagedata= await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
    const data={userId:id,
      post:imagedata.url

    }
    if(data){
    const datawithid=await this.userpostschema.create(data)
    console.log(datawithid);
    
    return datawithid;
    }
    throw new BadRequestException('something wrong has happened check credentials')
    
  }




}