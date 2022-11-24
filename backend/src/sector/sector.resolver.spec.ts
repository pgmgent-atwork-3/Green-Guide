import { Test, TestingModule } from '@nestjs/testing';
import { SectorResolver } from './sector.resolver';
import { SectorService } from './sector.service';

describe('SectorResolver', () => {
  let resolver: SectorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectorResolver, SectorService],
    }).compile();

    resolver = module.get<SectorResolver>(SectorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
