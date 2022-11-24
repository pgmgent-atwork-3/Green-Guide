import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SectorService } from './sector.service';
import { Sector } from './entities/sector.entity';
import { CreateSectorInput } from './dto/create-sector.input';
import { UpdateSectorInput } from './dto/update-sector.input';

@Resolver(() => Sector)
export class SectorResolver {
  constructor(private readonly sectorService: SectorService) {}

  @Mutation(() => Sector)
  createSector(@Args('createSectorInput') createSectorInput: CreateSectorInput) {
    return this.sectorService.create(createSectorInput);
  }

  @Query(() => [Sector], { name: 'sector' })
  findAll() {
    return this.sectorService.findAll();
  }

  @Query(() => Sector, { name: 'sector' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sectorService.findOne(id);
  }

  @Mutation(() => Sector)
  updateSector(@Args('updateSectorInput') updateSectorInput: UpdateSectorInput) {
    return this.sectorService.update(updateSectorInput.id, updateSectorInput);
  }

  @Mutation(() => Sector)
  removeSector(@Args('id', { type: () => Int }) id: number) {
    return this.sectorService.remove(id);
  }
}
