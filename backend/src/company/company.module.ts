import { Company } from 'src/company/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { forwardRef } from '@nestjs/common/utils';
import { ContactPersonModule } from 'src/contact-person/contact-person.module';
import { AddressModule } from 'src/address/address.module';
import { CompanyTypeModule } from 'src/company-type/company-type.module';
import { SectorModule } from 'src/sector/sector.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    forwardRef(() => ContactPersonModule),
    forwardRef(() => AddressModule),
    forwardRef(() => CompanyTypeModule),
    forwardRef(() => SectorModule),
    forwardRef(() => CategoryModule),
  ],
  exports: [CompanyService],
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
