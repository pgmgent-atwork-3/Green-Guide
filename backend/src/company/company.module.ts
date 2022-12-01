import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { Category } from './../category/entities/category.entity';
import { Sector } from './../sector/entities/sector.entity';
import { Address } from 'src/address/entities/address.entity';
import { ContactPerson } from './../contact-person/entities/contact-person.entity';
import { CompanyType } from './../company-type/entities/company-type.entity';
import { Review } from './../review/entities/review.entity';
import { Reward } from './../reward/entities/reward.entity';
import { Point } from './../point/entities/point.entity';
import { User } from 'src/user/entities/user.entity';
import { Company } from 'src/company/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    User,
    Point,
    Reward,
    Review,
    CompanyType,
    ContactPerson,
    Address,
    Sector,
    Category,
    CompanyRequest,
  ],
  exports: [CompanyService],
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
