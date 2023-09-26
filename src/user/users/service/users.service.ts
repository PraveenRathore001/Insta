import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usermodel } from '../user.model';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UsersService {
  constructor(@InjectModel('Userschema') private usermodel:Model<Usermodel> ){}
  async createUser(createUserDto: CreateUserDto) {
    console.log("hello");
    
    const existingUser = await this.usermodel.findOne({ Email: createUserDto.Email });

  if (existingUser) {
    // A user with the same email already exists
    throw new ConflictException('User with this email already exists. Please log in.');
  }
    // Hash the password
    const { password, ...userData } = createUserDto;
    const hashedPassword = this.hashPassword(password);
  
    return this.usermodel.create({
      ...userData,
      password: hashedPassword,
    });
  }

  private hashPassword(password: string): string {
    const salt = crypto.createHash('sha256').update(password).digest('hex');;
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return `${hash}`;
  }


  async userlogin(logincredentials){
console.log("ye login he");


    const { Email, password } = logincredentials;

    // Find the user by email
    const user = await this.usermodel.findOne({ Email }).exec();
  
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Hash the provided password
    const hashedPassword = this.hashPassword(password);

    // Compare the hashed password with the stored hashed password
    if (hashedPassword !== user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }
console.log(process.env.secret_key,"kkkkkkk");

    const token=this.generateToken(user)
    return {
      token:token,
      data:user
    }
  }

    private generateToken(user: Usermodel): string {
      // Define the JWT payload (you can include user information)
      const payload = { sub: user.id, Email: user.Email };
  
      // Sign the JWT with a secret key
      const token = jwt.sign(payload, process.env.secret_key, { expiresIn: '1h' });
  
      return token;
    
    // Return the user if login is successful
    // return user;
  }
  
}
