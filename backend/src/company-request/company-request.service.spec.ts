import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRequestService } from './company-request.service';

describe('CompanyRequestService', () => {
  let service: CompanyRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyRequestService],
    }).compile();

    service = module.get<CompanyRequestService>(CompanyRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
