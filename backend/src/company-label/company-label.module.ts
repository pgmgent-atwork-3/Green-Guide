import { Module, forwardRef } from '@nestjs/common';
import { CompanyLabelService } from './company-label.service';
import { CompanyLabelResolver } from './company-label.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyLabel } from './entities/company-label.entity';
import { CompanyRequestModule } from 'src/company-request/company-request.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyLabel]),
    forwardRef(() => CompanyRequestModule),
  ],
  exports: [CompanyLabelService],
  providers: [CompanyLabelResolver, CompanyLabelService],
})
export class CompanyLabelModule {}
