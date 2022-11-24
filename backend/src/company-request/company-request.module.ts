import { Module } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestResolver } from './company-request.resolver';

@Module({
  providers: [CompanyRequestResolver, CompanyRequestService]
})
export class CompanyRequestModule {}
