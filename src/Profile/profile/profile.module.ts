import { Module } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { CloudinaryModule } from 'src/cloudinary_imgstorage/cloudinary.module';
import { profileDetails } from './profile.model';

@Module({
  imports:[MongooseModule.forFeature([{ name:'profileschema', schema:profileDetails }]),CloudinaryModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
