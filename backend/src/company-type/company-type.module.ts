import { CompanyType } from './entities/company-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CompanyTypeService } from './company-type.service';
import { CompanyTypeResolver } from './company-type.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyType])],
  exports: [CompanyTypeService],
  providers: [CompanyTypeResolver, CompanyTypeService],
})
export class CompanyTypeModule {}
