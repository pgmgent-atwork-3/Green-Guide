import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/Decorators/currentUser.decorator';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Roles } from 'src/Decorators/roles.decorator';
import { Role } from 'src/role.enum';
import { RolesGuard } from 'src/auth/role.guard';

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
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUEPERADMIN, Role.ADMIN)
  findAll(@CurrentUser() user: User): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUEPERADMIN, Role.ADMIN)
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<User> {
    return this.userService.findOne(id);
  }

  @Query(() => User, { name: 'userByMail' })
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUEPERADMIN, Role.ADMIN)
  findOneByEmail(
    @Args('email') email: string,
    @CurrentUser() user: User,
  ): Promise<User> {
    return this.userService.findOneByEmail(email);
  }

  @Query(() => User, { name: 'userByUserName' })
  findOneByUserName(@Args('userName') userName: string): Promise<User> {
    return this.userService.findOneByUserName(userName);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUEPERADMIN, Role.ADMIN)
  updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser() user: User,
  ): Promise<User> {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUEPERADMIN, Role.ADMIN)
  removeUser(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<User> {
    return this.userService.remove(id);
  }
}
