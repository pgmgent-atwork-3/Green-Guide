import { Test, TestingModule } from '@nestjs/testing';
import { RewardResolver } from './reward.resolver';
import { RewardService } from './reward.service';

describe('RewardResolver', () => {
  let resolver: RewardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RewardResolver, RewardService],
    }).compile();

    resolver = module.get<RewardResolver>(RewardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
