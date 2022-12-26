import { Sector } from './entities/sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorResolver } from './sector.resolver';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sector]),
    forwardRef(() => CategoryModule),
  ],
  exports: [SectorService],
  providers: [SectorResolver, SectorService],
})
export class SectorModule {}
