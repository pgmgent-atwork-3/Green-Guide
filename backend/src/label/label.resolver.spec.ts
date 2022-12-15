import { Test, TestingModule } from '@nestjs/testing';
import { LabelResolver } from './label.resolver';
import { LabelService } from './label.service';

describe('LabelResolver', () => {
  let resolver: LabelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelResolver, LabelService],
    }).compile();

    resolver = module.get<LabelResolver>(LabelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
