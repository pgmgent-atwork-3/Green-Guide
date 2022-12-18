import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from './entities/label.entity';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Role } from '../role.enum';
import { Roles } from '../Decorators/roles.decorator';
import { User } from '../user/entities/user.entity';
import { CurrentUser } from '../Decorators/currentUser.decorator';

@Resolver(() => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Mutation(() => Label)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  createLabel(
    @Args('createLabelInput') createLabelInput: CreateLabelInput,
    @CurrentUser() user: User,
  ): Promise<Label> {
    return this.labelService.create(createLabelInput);
  }

  @Query(() => [Label], { name: 'labels' })
  findAll(): Promise<Label[]> {
    return this.labelService.findAll();
  }

  @Query(() => Label, { name: 'label' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Label> {
    return this.labelService.findOne(id);
  }

  @Mutation(() => Label)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  updateLabel(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateLabelInput') updateLabelInput: UpdateLabelInput,
    @CurrentUser() user: User,
  ): Promise<Label> {
    return this.labelService.update(id, updateLabelInput);
  }

  @Mutation(() => Label)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  removeLabel(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<Label> | null {
    return this.labelService.remove(id);
  }
}
