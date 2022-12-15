import { ContactPerson } from './entities/contact-person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactPersonService } from './contact-person.service';
import { ContactPersonResolver } from './contact-person.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ContactPerson])],
  exports: [ContactPersonService],
  providers: [ContactPersonResolver, ContactPersonService],
})
export class ContactPersonModule {}
