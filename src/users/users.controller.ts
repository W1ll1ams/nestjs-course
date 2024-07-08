import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateusersPipe } from './pipes/validateusers/validateusers.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Get()
  // getUsers(@Req() request: Request, @Res() response: Response) {
  //   //return this.userService.getUsers();
  //   console.log(request.url);
  //   response.status(200).json({ message: 'Hello World!' });
  // }

  @ApiTags('Users')
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @ApiTags('Users')
  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @ApiTags('UsersTests')
  @Get('/notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 Not Found Page';
  }

  @ApiTags('UsersTests')
  @Get('/error')
  @HttpCode(500)
  error() {
    return 'Error Page';
  }

  @ApiTags('UsersTests')
  @Get('/greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateusersPipe) query: { name: string; age: number }) {
    console.log(typeof query.age);
    console.log(typeof query.name);
    return `Hello ${query.name}, you are ${query.age + 30} years old`;
  }
}
