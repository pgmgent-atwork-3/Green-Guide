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

  async create(createAddressInput: CreateAddressInput): Promise<Address> {
    let address = this.addressRepository.create(createAddressInput);
    const location = await fetch(
      'http://api.positionstack.com/v1/forward?access_key=60155f6f5fdb189d7580a99ead74c445&query=' +
        createAddressInput.streetName +
        ' ' +
        createAddressInput.number +
        ' ' +
        createAddressInput.city,
    ).then((res) => res.json());
    address = {
      ...address,
      lat: location.data[0].latitude,
      long: location.data[0].longitude,
    };
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

  async update(
    id: number,
    updateAddressInput: UpdateAddressInput,
  ): Promise<Address> | null {
    const address = await this.addressRepository.findOne({
      where: { id },
    });
    if (address) {
      let geoLocation = {};
      if (
        updateAddressInput.streetName &&
        updateAddressInput.number &&
        updateAddressInput.city &&
        updateAddressInput.zipCode
      ) {
        const location = await fetch(
          'http://api.positionstack.com/v1/forward?access_key=60155f6f5fdb189d7580a99ead74c445&query=' +
            updateAddressInput.streetName +
            ' ' +
            updateAddressInput.number +
            ' ' +
            updateAddressInput.city,
        ).then((res) => res.json());
        geoLocation = {
          lat: location.data.results[0].latitude,
          long: location.data.results[0].longitude,
        };
      }
      this.addressRepository.merge(address, updateAddressInput, geoLocation);
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
