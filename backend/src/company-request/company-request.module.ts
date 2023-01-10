import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestResolver } from './company-request.resolver';
import { CompanyTypeModule } from 'src/company-type/company-type.module';
import { SectorModule } from 'src/sector/sector.module';
import { CategoryModule } from 'src/category/category.module';
import { CompanyLabelModule } from 'src/company-label/company-label.module';
import { AddressModule } from 'src/address/address.module';
import { ContactPersonModule } from 'src/contact-person/contact-person.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRequest]),
    forwardRef(() => CompanyLabelModule),
    forwardRef(() => CompanyTypeModule),
    forwardRef(() => SectorModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => ContactPersonModule),
    forwardRef(() => AddressModule),
    forwardRef(() => CompanyModule),
  ],
  exports: [CompanyRequestService],
  providers: [CompanyRequestResolver, CompanyRequestService],
})
export class CompanyRequestModule {}
