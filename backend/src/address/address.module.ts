import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';

@Module({
  providers: [AddressResolver, AddressService]
})
export class AddressModule {}
