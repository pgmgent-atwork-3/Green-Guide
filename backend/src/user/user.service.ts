import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<User> | null {
    const user = await this.usersRepository.findOne({
      where: { id },
    });
    if (user) {
      this.usersRepository.merge(user, updateUserInput);
      return this.usersRepository.save(user);
    } else {
      throw new Error('User not found');
    }
  }

  async remove(id: number): Promise<User> | null {
    const user = await this.usersRepository.findOne({
      where: { id },
    });
    if (user) {
      return this.usersRepository.remove(user);
    } else {
      throw new Error('User not found');
    }
  }
}
