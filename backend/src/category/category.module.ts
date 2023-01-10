import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { SectorModule } from 'src/sector/sector.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    forwardRef(() => SectorModule),
  ],
  exports: [CategoryService],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
