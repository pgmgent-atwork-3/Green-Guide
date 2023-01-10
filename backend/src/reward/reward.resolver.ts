import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RewardService } from './reward.service';
import { Reward } from './entities/reward.entity';
import { CreateRewardInput } from './dto/create-reward.input';
import { UpdateRewardInput } from './dto/update-reward.input';
import { Roles } from '../Decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { Role } from '../role.enum';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { CurrentUser } from '../Decorators/currentUser.decorator';
import { User } from '../user/entities/user.entity';

@Resolver(() => Reward)
export class RewardResolver {
  constructor(private readonly rewardService: RewardService) {}

  @Mutation(() => Reward)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY)
  createReward(
    @Args('createRewardInput') createRewardInput: CreateRewardInput,
    @CurrentUser() user: User,
  ): Promise<Reward> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.rewardService.create(createRewardInput);
  }

  @Query(() => [Reward], { name: 'reward' })
  findAll(): Promise<Reward[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.rewardService.findAll();
  }

  @Query(() => Reward, { name: 'reward' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Reward> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.rewardService.findOne(id);
  }

  @Mutation(() => Reward)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY)
  updateReward(
    @Args('updateRewardInput') updateRewardInput: UpdateRewardInput,
    @Args('id') id: number,
    @CurrentUser() user: User,
  ): Promise<Reward> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.rewardService.update(updateRewardInput.id, updateRewardInput);
  }

  @Mutation(() => Reward)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  removeReward(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<Reward> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.rewardService.remove(id);
  }
}
