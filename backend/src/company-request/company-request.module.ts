import { Company } from './../company/entities/company.entity';
import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestResolver } from './company-request.resolver';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRequest]),
    Company,
    forwardRef(() => CompanyModule),
  ],
  exports: [CompanyRequestService],
  providers: [CompanyRequestResolver, CompanyRequestService],
})
export class CompanyRequestModule {}
