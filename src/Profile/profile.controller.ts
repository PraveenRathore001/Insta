import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException, UseGuards, Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary_imgstorage/cloudinary.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import * as jwt from 'jsonwebtoken';
import { CreateProfileDto } from './profile/dto/create-profile.dto';
import { ProfileService } from './profile.service';



@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Post("profilepic")
  @UseInterceptors(FileInterceptor('profile_pic')) // 'image' should match the field name in your form data
  async AddProfile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProfileDto: CreateProfileDto, 
    @Request() req:any// You should define CreateProfileDto

  ) {

    const id= this.id_fromtoken(req)
    return this.profileService.createprofile(file,createProfileDto,id)
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
