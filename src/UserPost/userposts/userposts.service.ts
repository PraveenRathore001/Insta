import { Injectable } from '@nestjs/common';
import { CreateUserpostDto } from './dto/create-userpost.dto';
import { UpdateUserpostDto } from './dto/update-userpost.dto';

@Injectable()
export class UserpostsService {
  create(createUserpostDto: CreateUserpostDto) {
    return 'This action adds a new userpost';
  }

  findAll() {
    return `This action returns all userposts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userpost`;
  }

  update(id: number, updateUserpostDto: UpdateUserpostDto) {
    return `This action updates a #${id} userpost`;
  }

  remove(id: number) {
    return `This action removes a #${id} userpost`;
  }
}
