import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAll(): string {
    return this.userService.getItem();
  }

  @Post()
  async create(
    @Body() createUsersDto: CreateUserDto,
  ): Promise<string | number> {
    const { name, email } = createUsersDto;
    return `${name} ${email}`;
  }
}
