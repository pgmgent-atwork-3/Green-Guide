import { Category } from './../category/entities/category.entity';
import { Company } from 'src/company/entities/company.entity';
import { Sector } from './entities/sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorResolver } from './sector.resolver';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sector]),
    Company,
    Category,
    forwardRef(() => CategoryModule),
  ],
  exports: [SectorService],
  providers: [SectorResolver, SectorService],
})
export class SectorModule {}
