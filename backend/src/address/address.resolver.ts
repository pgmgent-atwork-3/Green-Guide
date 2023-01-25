import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Roles } from '../Decorators/roles.decorator';
import { Role } from '../role.enum';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { User } from 'src/user/entities/user.entity';
import { CurrentUser } from '../Decorators/currentUser.decorator';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  // @UseGuards(GqlAuthGuard, RolesGuard)
  // @Roles(Role.COMPANY)
  createAddress(
    @Args('createAddressInput') createAddressInput: CreateAddressInput,
    // @CurrentUser() user: User,
  ): Promise<Address> {
    return this.addressService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Mutation(() => Address)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY)
  updateAddress(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAddressInput') updateAddressInput: UpdateAddressInput,
    @CurrentUser() user: User,
  ): Promise<Address> | null {
    return this.addressService.update(id, updateAddressInput);
  }

  @Mutation(() => Address)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  removeAddress(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<Address> | null {
    return this.addressService.remove(id);
  }
}
