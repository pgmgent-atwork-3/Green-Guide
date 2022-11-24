import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactPersonService } from './contact-person.service';
import { ContactPerson } from './entities/contact-person.entity';
import { CreateContactPersonInput } from './dto/create-contact-person.input';
import { UpdateContactPersonInput } from './dto/update-contact-person.input';

@Resolver(() => ContactPerson)
export class ContactPersonResolver {
  constructor(private readonly contactPersonService: ContactPersonService) {}

  @Mutation(() => ContactPerson)
  createContactPerson(@Args('createContactPersonInput') createContactPersonInput: CreateContactPersonInput) {
    return this.contactPersonService.create(createContactPersonInput);
  }

  @Query(() => [ContactPerson], { name: 'contactPerson' })
  findAll() {
    return this.contactPersonService.findAll();
  }

  @Query(() => ContactPerson, { name: 'contactPerson' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactPersonService.findOne(id);
  }

  @Mutation(() => ContactPerson)
  updateContactPerson(@Args('updateContactPersonInput') updateContactPersonInput: UpdateContactPersonInput) {
    return this.contactPersonService.update(updateContactPersonInput.id, updateContactPersonInput);
  }

  @Mutation(() => ContactPerson)
  removeContactPerson(@Args('id', { type: () => Int }) id: number) {
    return this.contactPersonService.remove(id);
  }
}
