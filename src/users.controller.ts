import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user/user.service';

import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async postUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users();
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
