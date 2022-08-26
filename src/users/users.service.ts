import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';

@Injectable()
@Entity({
  name: 'USERS',
})
export class UsersService {
  // constructor(
  //   @InjectRepository(User)
  //   private readonly userRepository: Repository<User>,
  // ) {}
  getItem() {
    return 'Hello World';
  }
}
