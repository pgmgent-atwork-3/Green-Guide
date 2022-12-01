import { Company } from 'src/company/entities/company.entity';
import { Address } from 'src/address/entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Address]), Company],
  exports: [AddressService],
  providers: [AddressResolver, AddressService],
})
export class AddressModule {}
