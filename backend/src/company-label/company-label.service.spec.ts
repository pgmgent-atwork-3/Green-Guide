import { Test, TestingModule } from '@nestjs/testing';
import { CompanyLabelService } from './company-label.service';

describe('CompanyLabelService', () => {
  let service: CompanyLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyLabelService],
    }).compile();

    service = module.get<CompanyLabelService>(CompanyLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
