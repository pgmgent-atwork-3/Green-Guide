import { Point } from './entities/point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointResolver } from './point.resolver';
import { forwardRef } from '@nestjs/common/utils';
import { UserModule } from 'src/user/user.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Point]),
    forwardRef(() => UserModule),
    forwardRef(() => CompanyModule),
  ],
  exports: [PointService],
  providers: [PointResolver, PointService],
})
export class PointModule {}
