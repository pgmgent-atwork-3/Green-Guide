import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelResolver } from './label.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Label } from './entities/label.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Label])],
  exports: [LabelService],
  providers: [LabelResolver, LabelService],
})
export class LabelModule {}
