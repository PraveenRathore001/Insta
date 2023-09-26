import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary_imgstorage/cloudinary.service';
import { ObjectId } from 'mongodb';
import { CreateProfileDto } from './profile/dto/create-profile.dto';
import { Profilemodel } from './profile/profile.model';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProfileService {
  constructor(@InjectModel('profileschema') private profileschema:Model<Profilemodel>, private cloudinary: CloudinaryService  ){}
 
 

  async createprofile(file: Express.Multer.File, createProfileDto: CreateProfileDto,id) {

    
   const userid= new ObjectId(id)
   console.log(userid);
   
    //  const data= await this.profileschema.find({userId:userid}).sort({createdAt:-1}).limit(1)
    //  console.log(data);
     let dataV1 = await this.profileschema.aggregate([
      {$match:{userId:userid}},
      {$sort:{createdAt:-1}},
      {$limit:1}
     ])

    if (dataV1.length==0){
      const imagedata= await this.cloudinary.uploadImage(file).catch(() => {
        throw new BadRequestException('Invalid file type.');
      });
      const profileData = {
        profile_pic: imagedata.url,
        userId: userid,
        isActive: true,
      };
      await this.profileschema.create(profileData)
      return profileData
    }
    
       await this.profileschema.updateMany({isActive:false})

    
       const imagedata= await this.cloudinary.uploadImage(file).catch(() => {
        throw new BadRequestException('Invalid file type.');
      });

      const profileData = {
        profile_pic: imagedata.url,
        userId: userid,
        isActive: true,
      };

      await this.profileschema.create(profileData)
      return profileData
      
    }

   
}
 

