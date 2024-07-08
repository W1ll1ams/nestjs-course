import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

interface User {
  name: string;
  age: number;
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    //return this.users;
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto) {
    // this.users.push({
    //   ...user,
    //   id: this.users.length + 1,
    //   phone: '',
    // });
    // return user;
    return this.prisma.user.create({ data: user });
  }
}
