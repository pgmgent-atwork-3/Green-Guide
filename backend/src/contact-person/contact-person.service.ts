import { Injectable } from '@nestjs/common';
import { CreateContactPersonInput } from './dto/create-contact-person.input';
import { UpdateContactPersonInput } from './dto/update-contact-person.input';

@Injectable()
export class ContactPersonService {
  create(createContactPersonInput: CreateContactPersonInput) {
    return 'This action adds a new contactPerson';
  }

  findAll() {
    return `This action returns all contactPerson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactPerson`;
  }

  update(id: number, updateContactPersonInput: UpdateContactPersonInput) {
    return `This action updates a #${id} contactPerson`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactPerson`;
  }
}
