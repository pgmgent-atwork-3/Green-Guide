import { Test, TestingModule } from '@nestjs/testing';
import { ContactPersonService } from './contact-person.service';

describe('ContactPersonService', () => {
  let service: ContactPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactPersonService],
    }).compile();

    service = module.get<ContactPersonService>(ContactPersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
