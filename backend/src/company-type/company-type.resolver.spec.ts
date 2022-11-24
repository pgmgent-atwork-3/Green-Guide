import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTypeResolver } from './company-type.resolver';
import { CompanyTypeService } from './company-type.service';

describe('CompanyTypeResolver', () => {
  let resolver: CompanyTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyTypeResolver, CompanyTypeService],
    }).compile();

    resolver = module.get<CompanyTypeResolver>(CompanyTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
