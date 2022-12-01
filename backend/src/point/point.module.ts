import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import { Point } from './entities/point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointResolver } from './point.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Point]), User, Company],
  exports: [PointService],
  providers: [PointResolver, PointService],
})
export class PointModule {}
