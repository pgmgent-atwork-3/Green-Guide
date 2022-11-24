import { Test, TestingModule } from '@nestjs/testing';
import { ContactPersonResolver } from './contact-person.resolver';
import { ContactPersonService } from './contact-person.service';

describe('ContactPersonResolver', () => {
  let resolver: ContactPersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactPersonResolver, ContactPersonService],
    }).compile();

    resolver = module.get<ContactPersonResolver>(ContactPersonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
