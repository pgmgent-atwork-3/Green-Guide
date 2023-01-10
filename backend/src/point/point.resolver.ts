import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PointService } from './point.service';
import { Point } from './entities/point.entity';
import { CreatePointInput } from './dto/create-point.input';
import { UpdatePointInput } from './dto/update-point.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../Decorators/roles.decorator';
import { Role } from '../role.enum';
import { User } from '../user/entities/user.entity';
import { CurrentUser } from '../Decorators/currentUser.decorator';
import { Company } from 'src/company/entities/company.entity';

@Resolver(() => Point)
export class PointResolver {
  constructor(private readonly pointService: PointService) {}

  @Mutation(() => Point)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  createPoint(
    @Args('createPointInput') createPointInput: CreatePointInput,
    @CurrentUser() user: User,
  ): Promise<Point> {
    return this.pointService.create(createPointInput);
  }

  @Query(() => [Point], { name: 'points' })
  findAll(): Promise<Point[]> {
    return this.pointService.findAll();
  }

  @Query(() => Point, { name: 'point' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Point> {
    return this.pointService.findOne(id);
  }

  @Mutation(() => Point)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  updatePoint(
    @Args('id') id: number,
    @Args('updatePointInput') updatePointInput: UpdatePointInput,
    @CurrentUser() user: User,
  ): Promise<Point> {
    return this.pointService.update(id, updatePointInput);
  }

  @Mutation(() => Point)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  removePoint(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<Point> {
    return this.pointService.remove(id);
  }

  @ResolveField(() => User)
  user(@Parent() point: Point): Promise<User> {
    return this.pointService.getUser(point.userId);
  }

  @ResolveField(() => Company)
  company(@Parent() point: Point): Promise<Company> {
    return this.pointService.getCompany(point.companyId);
  }
}
