import { Module } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudinaryModule } from 'src/cloudinary_imgstorage/cloudinary.module';
import { authmodule } from 'src/auth/auth.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { profileDetails } from './profile/profile.model';

@Module({
  imports:[authmodule,MongooseModule.forFeature([{ name:'profileschema', schema:profileDetails }]),CloudinaryModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
