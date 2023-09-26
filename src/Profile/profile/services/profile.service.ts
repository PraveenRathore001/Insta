import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profilemodel } from '../profile.model';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary_imgstorage/cloudinary.service';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProfileService {
  constructor(@InjectModel('profileschema') private profileschema:Model<Profilemodel>, private cloudinary: CloudinaryService  ){}
 
 

  async createprofile(file: Express.Multer.File, createProfileDto: CreateProfileDto) {

    
   const userid= new ObjectId(createProfileDto.userId)
   console.log(userid);
   
    //  const data= await this.profileschema.find({userId:userid}).sort({createdAt:-1}).limit(1)
    //  console.log(data);
     let dataV1 = await this.profileschema.aggregate([
      {$match:{userId:userid}},
      {$sort:{createdAt:-1}},
      {$limit:1}
     ])
      await this.profileschema.updateMany({isActive:false})
     
     if(dataV1.length>0){

      //  data.isActive=false
      //  await data.save()
       const imagedata= await this.cloudinary.uploadImage(file).catch(() => {
        throw new BadRequestException('Invalid file type.');
      });
      const profileData = {
        profile_pic: imagedata.url,
        userId: createProfileDto.userId,
        isActive: true,
      };
      await this.profileschema.create(profileData)
      return profileData
      }
      else{

       throw new BadRequestException('no data found');

     }
    }

   
}
 

