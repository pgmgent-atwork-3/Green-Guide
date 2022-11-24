import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(@Args('createAddressInput') createAddressInput: CreateAddressInput) {
    return this.addressService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'address' })
  findAll() {
    return this.addressService.findAll();
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.addressService.findOne(id);
  }

  @Mutation(() => Address)
  updateAddress(@Args('updateAddressInput') updateAddressInput: UpdateAddressInput) {
    return this.addressService.update(updateAddressInput.id, updateAddressInput);
  }

  @Mutation(() => Address)
  removeAddress(@Args('id', { type: () => Int }) id: number) {
    return this.addressService.remove(id);
  }
}
