import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTypeService } from './company-type.service';

describe('CompanyTypeService', () => {
  let service: CompanyTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyTypeService],
    }).compile();

    service = module.get<CompanyTypeService>(CompanyTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
