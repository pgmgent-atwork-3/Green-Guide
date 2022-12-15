import { Sector } from './../sector/entities/sector.entity';
import { Company } from 'src/company/entities/company.entity';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { SectorModule } from 'src/sector/sector.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    Company,
    Sector,
    forwardRef(() => SectorModule),
  ],
  exports: [CategoryService],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
