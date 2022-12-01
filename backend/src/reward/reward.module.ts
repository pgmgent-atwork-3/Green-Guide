import { Reward } from './entities/reward.entity';
import { Company } from 'src/company/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardResolver } from './reward.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Reward]), Company],
  exports: [RewardService],
  providers: [RewardResolver, RewardService],
})
export class RewardModule {}
