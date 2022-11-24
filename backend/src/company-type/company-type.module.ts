import { Module } from '@nestjs/common';
import { CompanyTypeService } from './company-type.service';
import { CompanyTypeResolver } from './company-type.resolver';

@Module({
  providers: [CompanyTypeResolver, CompanyTypeService]
})
export class CompanyTypeModule {}
