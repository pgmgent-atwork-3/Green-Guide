import { Test, TestingModule } from '@nestjs/testing';
import { CompanyLabelResolver } from './company-label.resolver';
import { CompanyLabelService } from './company-label.service';

describe('CompanyLabelResolver', () => {
  let resolver: CompanyLabelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyLabelResolver, CompanyLabelService],
    }).compile();

    resolver = module.get<CompanyLabelResolver>(CompanyLabelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
