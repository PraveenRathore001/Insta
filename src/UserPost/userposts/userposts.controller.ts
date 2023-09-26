import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserpostsService } from './userposts.service';
import { CreateUserpostDto } from './dto/create-userpost.dto';
import { UpdateUserpostDto } from './dto/update-userpost.dto';

@Controller('userposts')
export class UserpostsController {
  constructor(private readonly userpostsService: UserpostsService) {}

  @Post()
  create(@Body() createUserpostDto: CreateUserpostDto) {
    return this.userpostsService.create(createUserpostDto);
  }

  @Get()
  findAll() {
    return this.userpostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userpostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserpostDto: UpdateUserpostDto) {
    return this.userpostsService.update(+id, updateUserpostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userpostsService.remove(+id);
  }
}
