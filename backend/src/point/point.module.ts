import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointResolver } from './point.resolver';

@Module({
  providers: [PointResolver, PointService]
})
export class PointModule {}
