import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  create(createAddressInput: CreateAddressInput): Promise<Address> {
    const address = this.addressRepository.create(createAddressInput);
    return this.addressRepository.save(address);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  findOne(id: number): Promise<Address> {
    return this.addressRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateAddressInput: UpdateAddressInput): Promise<Address> | null {
    const address = await this.addressRepository.findOne({
      where: { id },
    });
    if (address) {
      this.addressRepository.merge(address, updateAddressInput);
      return this.addressRepository.save(address);
    } else {
      throw new Error('Address not found');
    }
  }

  async remove(id: number): Promise<Address> | null {
    const address = await this.addressRepository.findOne({
      where: { id },
    });
    if (address) {
      return this.addressRepository.remove(address);
    } else {
      throw new Error('Address not found');
    }
  }
}
