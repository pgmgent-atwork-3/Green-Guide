import { Test, TestingModule } from '@nestjs/testing';
import { PointResolver } from './point.resolver';
import { PointService } from './point.service';

describe('PointResolver', () => {
  let resolver: PointResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointResolver, PointService],
    }).compile();

    resolver = module.get<PointResolver>(PointResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
