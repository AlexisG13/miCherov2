import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repositories/user.repository';

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  exports: [UsersService, TypeOrmModule.forFeature([UsersRepository])],
})
export class UsersModule {}
