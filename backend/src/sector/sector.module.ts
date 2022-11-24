import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorResolver } from './sector.resolver';

@Module({
  providers: [SectorResolver, SectorService]
})
export class SectorModule {}
