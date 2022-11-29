import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRequestResolver } from './company-request.resolver';
import { CompanyRequestService } from './company-request.service';

describe('CompanyRequestResolver', () => {
  let resolver: CompanyRequestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyRequestResolver, CompanyRequestService],
    }).compile();

    resolver = module.get<CompanyRequestResolver>(CompanyRequestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
