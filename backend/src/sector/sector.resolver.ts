import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SectorService } from './sector.service';
import { Sector } from './entities/sector.entity';
import { CreateSectorInput } from './dto/create-sector.input';
import { UpdateSectorInput } from './dto/update-sector.input';
import { Category } from 'src/category/entities/category.entity';
import { Role } from '../role.enum';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Roles } from '../Decorators/roles.decorator';
import { RolesGuard } from '../auth/role.guard';
import { User } from '../user/entities/user.entity';
import { CurrentUser } from '../Decorators/currentUser.decorator';

@Resolver(() => Sector)
export class SectorResolver {
  constructor(private readonly sectorService: SectorService) {}

  @Mutation(() => Sector)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  createSector(
    @Args('createSectorInput') createSectorInput: CreateSectorInput,
    @CurrentUser() user: User,
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
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  updateSector(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSectorInput') updateSectorInput: UpdateSectorInput,
  ): Promise<Sector> {
    return this.sectorService.update(id, updateSectorInput);
  }

  @Mutation(() => Sector)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  removeSector(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Sector> | null {
    return this.sectorService.remove(id);
  }

  @ResolveField(() => Category)
  categories(@Parent() sector: Sector): Promise<Category[]> {
    return this.sectorService.getCategoriesBySectorId(sector.id);
  }
}
