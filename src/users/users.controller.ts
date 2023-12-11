import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    /* 
       GET       /users
       GET       /users/:id
       POST      /users
       PATCH     /users/:id
       DELETE    /users/:id
    */

   @Get()  //Get Users or paginatioin with query or users?role="admin"
   findAll(@Query('role') role?: 'Admin' | 'User') {
       return this.usersService.findAll(role);
   }

   @Get(':id')  //Get User
   findOne(@Param('id', ParseIntPipe) id: number) {
       return this.usersService.findOne(id); // +id is converted string to number   
   }

   @Post()  //Create User
   create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
       return this.usersService.create(createUserDto);
   }

   @Patch(':id')  //Update User
   update(@Param('id', ParseIntPipe) id : number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
       return this.usersService.update(id, updateUserDto);
   }
       
   @Delete(':id')  //Delete User
   remove(@Param('id', ParseIntPipe) id : number) {
        return this.usersService.remove(id);
   }
}
