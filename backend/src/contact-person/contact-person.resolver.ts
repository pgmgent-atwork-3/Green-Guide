import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactPersonService } from './contact-person.service';
import { ContactPerson } from './entities/contact-person.entity';
import { CreateContactPersonInput } from './dto/create-contact-person.input';
import { UpdateContactPersonInput } from './dto/update-contact-person.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../Decorators/roles.decorator';
import { Role } from '../role.enum';
import { CurrentUser } from '../Decorators/currentUser.decorator';
import { User } from '../user/entities/user.entity';

@Resolver(() => ContactPerson)
export class ContactPersonResolver {
  constructor(private readonly contactPersonService: ContactPersonService) {}

  @Mutation(() => ContactPerson)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY)
  createContactPerson(
    @Args('createContactPersonInput')
    createContactPersonInput: CreateContactPersonInput,
    @CurrentUser() user: User,
  ): Promise<ContactPerson> {
    return this.contactPersonService.create(createContactPersonInput);
  }

  @Query(() => [ContactPerson], { name: 'contactPersons' })
  findAll(): Promise<ContactPerson[]> {
    return this.contactPersonService.findAll();
  }

  @Query(() => ContactPerson, { name: 'contactPerson' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<ContactPerson> {
    return this.contactPersonService.findOne(id);
  }

  @Mutation(() => ContactPerson)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY)
  updateContactPerson(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateContactPersonInput')
    updateContactPersonInput: UpdateContactPersonInput,
    @CurrentUser() user: User,
  ): Promise<ContactPerson> {
    return this.contactPersonService.update(id, updateContactPersonInput);
  }

  @Mutation(() => ContactPerson)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY)
  removeContactPerson(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<ContactPerson> | null {
    return this.contactPersonService.remove(id);
  }
}
