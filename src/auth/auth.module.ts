import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/user/users/users.module";

@Module({
  imports: [PassportModule, UsersModule,
    
    JwtModule.register({
      secret: process.env.secret,
      signOptions: { expiresIn: '1hr' },
    }),],
  controllers: [],
  providers: [],
})
export class authmodule {}
