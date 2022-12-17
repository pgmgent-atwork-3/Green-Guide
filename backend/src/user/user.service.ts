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
    private userRepository: Repository<User>,
  ) {}

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  findOneByUserName(userName: string): Promise<User> {
    return this.userRepository.findOne({
      where: { userName },
    });
  }

  create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<User> | null {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (user) {
      this.userRepository.merge(user, updateUserInput);
      return this.userRepository.save(user);
    } else {
      throw new Error('User not found');
    }
  }

  async remove(id: number): Promise<User> | null {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (user) {
      return this.userRepository.remove(user);
    } else {
      throw new Error('User not found');
    }
  }
}
