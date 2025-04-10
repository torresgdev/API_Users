import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/entities/user.entity';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UpdateUserDto } from './users/dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>
    ){}

    create(data: CreateUserDto) {
        const user = this.repo.create(data)
        return this.repo.save(user)
    }

     findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({id})
  }

  update(id: number, data: UpdateUserDto) {
    return this.repo.update(id, data)
  }

  remove(id: number) {
    return this.repo.delete(id)
  }
}
