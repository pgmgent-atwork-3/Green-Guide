import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';

@Module({
  providers: [CompanyResolver, CompanyService]
})
export class CompanyModule {}
