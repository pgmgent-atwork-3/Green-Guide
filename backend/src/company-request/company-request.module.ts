import { Company } from './../company/entities/company.entity';
import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestResolver } from './company-request.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRequest]), Company],
  exports: [CompanyRequestService],
  providers: [CompanyRequestResolver, CompanyRequestService],
})
export class CompanyRequestModule {}
