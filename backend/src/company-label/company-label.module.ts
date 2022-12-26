import { Module, forwardRef } from '@nestjs/common';
import { CompanyLabelService } from './company-label.service';
import { CompanyLabelResolver } from './company-label.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyLabel } from './entities/company-label.entity';
import { CompanyRequestModule } from 'src/company-request/company-request.module';
import { LabelModule } from 'src/label/label.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyLabel]),
    forwardRef(() => CompanyModule),
    forwardRef(() => CompanyRequestModule),
    forwardRef(() => LabelModule),
  ],
  exports: [CompanyLabelService],
  providers: [CompanyLabelResolver, CompanyLabelService],
})
export class CompanyLabelModule {}
