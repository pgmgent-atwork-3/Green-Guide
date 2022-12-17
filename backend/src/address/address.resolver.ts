import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(
    @Args('createAddressInput') createAddressInput: CreateAddressInput,
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
  updateAddress(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAddressInput') updateAddressInput: UpdateAddressInput,
  ): Promise<Address> | null {
    return this.addressService.update(id, updateAddressInput);
  }

  @Mutation(() => Address)
  removeAddress(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Address> | null {
    return this.addressService.remove(id);
  }
}
