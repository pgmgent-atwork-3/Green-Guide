import { Category } from './../category/entities/category.entity';
import { Company } from 'src/company/entities/company.entity';
import { Sector } from './entities/sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorResolver } from './sector.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Sector]), Company, Category],
  exports: [SectorService],
  providers: [SectorResolver, SectorService],
})
export class SectorModule {}
