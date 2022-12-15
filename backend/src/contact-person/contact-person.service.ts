import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactPersonInput } from './dto/create-contact-person.input';
import { UpdateContactPersonInput } from './dto/update-contact-person.input';
import { ContactPerson } from './entities/contact-person.entity';

@Injectable()
export class ContactPersonService {
  constructor(
    @InjectRepository(ContactPerson)
    private contactPersonRepository: Repository<ContactPerson>,
  ) {}

  create(
    createContactPersonInput: CreateContactPersonInput,
  ): Promise<ContactPerson> {
    const contactPerson = this.contactPersonRepository.create(
      createContactPersonInput,
    );
    return this.contactPersonRepository.save(contactPerson);
  }

  findAll(): Promise<ContactPerson[]> {
    return this.contactPersonRepository.find();
  }

  findOne(id: number): Promise<ContactPerson> {
    return this.contactPersonRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateContactPersonInput: UpdateContactPersonInput,
  ): Promise<ContactPerson> | null {
    const contactPerson = await this.contactPersonRepository.findOne({
      where: { id },
    });
    if (contactPerson) {
      this.contactPersonRepository.merge(
        contactPerson,
        updateContactPersonInput,
      );
      return this.contactPersonRepository.save(contactPerson);
    } else {
      throw new Error('ContactPerson not found');
    }
  }

  async remove(id: number): Promise<ContactPerson> | null {
    const contactPerson = await this.contactPersonRepository.findOne({
      where: { id },
    });
    if (contactPerson) {
      return this.contactPersonRepository.remove(contactPerson);
    } else {
      throw new Error('ContactPerson not found');
    }
  }
}
