import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('id', { type: () => Int }) id: number
    ): Promise<User> {
    return this.userService.findOne(id);
  }

  @Query(() => User, { name: 'userByMail' })
  findOneByEmail(
    @Args('email') email: string
    ): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Query(() => User, { name: 'userByUserName' })
  findOneByUserName(
    @Args('userName') userName: string
    ): Promise<User> {
    return this.userService.findOneByUserName(userName);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(
    @Args('id', { type: () => Int }) id: number
    ): Promise<User> {
    return this.userService.remove(id);
  }
}
