import { Reward } from './entities/reward.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardResolver } from './reward.resolver';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reward]),
    forwardRef(() => CompanyModule),
  ],
  exports: [RewardService],
  providers: [RewardResolver, RewardService],
})
export class RewardModule {}
