import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [PrismaService, UserService],
})
export class AppModule {}
