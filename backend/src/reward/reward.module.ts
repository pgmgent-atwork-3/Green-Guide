import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardResolver } from './reward.resolver';

@Module({
  providers: [RewardResolver, RewardService]
})
export class RewardModule {}
