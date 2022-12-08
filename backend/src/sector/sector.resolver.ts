import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SectorService } from './sector.service';
import { Sector } from './entities/sector.entity';
import { CreateSectorInput } from './dto/create-sector.input';
import { UpdateSectorInput } from './dto/update-sector.input';

@Resolver(() => Sector)
export class SectorResolver {
  constructor(private readonly sectorService: SectorService) {}

  @Mutation(() => Sector)
  createSector(
    @Args('createSectorInput') createSectorInput: CreateSectorInput,
  ): Promise<Sector> {
    return this.sectorService.create(createSectorInput);
  }

  @Query(() => [Sector], { name: 'sectors' })
  findAll(): Promise<Sector[]> {
    return this.sectorService.findAll();
  }

  @Query(() => Sector, { name: 'sector' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Sector> {
    return this.sectorService.findOne(id);
  }

  @Mutation(() => Sector)
  updateSector(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSectorInput') updateSectorInput: UpdateSectorInput,
  ): Promise<Sector> {
    return this.sectorService.update(id, updateSectorInput);
  }

  @Mutation(() => Sector)
  removeSector(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Sector> | null {
    return this.sectorService.remove(id);
  }
}
