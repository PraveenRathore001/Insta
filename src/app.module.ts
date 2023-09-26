import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/users/users.module';
import { ProfileModule } from './Profile/profile/profile.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/social'),UsersModule,ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
