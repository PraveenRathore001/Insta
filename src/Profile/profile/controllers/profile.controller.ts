import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary_imgstorage/cloudinary.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post("profilepic")
  @UseInterceptors(FileInterceptor('profile_pic')) // 'image' should match the field name in your form data
  async AddProfile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProfileDto: CreateProfileDto, // You should define CreateProfileDto
  ){
    // console.log(file,"dffhsfshfkshfs");
    
    return this.profileService.createprofile(file,createProfileDto)
  }

 
}
