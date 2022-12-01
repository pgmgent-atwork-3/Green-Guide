import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RewardService } from './reward.service';
import { Reward } from './entities/reward.entity';
import { CreateRewardInput } from './dto/create-reward.input';
import { UpdateRewardInput } from './dto/update-reward.input';

@Resolver(() => Reward)
export class RewardResolver {
  constructor(private readonly rewardService: RewardService) {}

  @Mutation(() => Reward)
  createReward(@Args('createRewardInput') createRewardInput: CreateRewardInput) {
    return this.rewardService.create(createRewardInput);
  }

  @Query(() => [Reward], { name: 'reward' })
  findAll() {
    return this.rewardService.findAll();
  }

  @Query(() => Reward, { name: 'reward' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rewardService.findOne(id);
  }

  @Mutation(() => Reward)
  updateReward(@Args('updateRewardInput') updateRewardInput: UpdateRewardInput) {
    return this.rewardService.update(updateRewardInput.id, updateRewardInput);
  }

  @Mutation(() => Reward)
  removeReward(@Args('id', { type: () => Int }) id: number) {
    return this.rewardService.remove(id);
  }
}
