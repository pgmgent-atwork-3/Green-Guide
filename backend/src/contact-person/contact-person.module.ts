import { Module } from '@nestjs/common';
import { ContactPersonService } from './contact-person.service';
import { ContactPersonResolver } from './contact-person.resolver';

@Module({
  providers: [ContactPersonResolver, ContactPersonService]
})
export class ContactPersonModule {}
