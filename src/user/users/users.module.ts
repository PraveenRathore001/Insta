import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
// import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Userdetails } from './user.model';
import { UsersService } from './service/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  imports:[MongooseModule.forFeature([{ name:'Userschema', schema:Userdetails }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
