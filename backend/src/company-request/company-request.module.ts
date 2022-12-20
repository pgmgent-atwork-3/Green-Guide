import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequestResolver } from './company-request.resolver';
import { CompanyTypeModule } from 'src/company-type/company-type.module';
import { LabelModule } from 'src/label/label.module';
import { SectorModule } from 'src/sector/sector.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRequest]),
    forwardRef(() => LabelModule),
    forwardRef(() => CompanyTypeModule),
    forwardRef(() => SectorModule),
    forwardRef(() => CategoryModule),
  ],
  exports: [CompanyRequestService],
  providers: [CompanyRequestResolver, CompanyRequestService],
})
export class CompanyRequestModule {}
