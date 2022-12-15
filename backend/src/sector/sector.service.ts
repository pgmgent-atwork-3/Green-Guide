import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateSectorInput } from './dto/create-sector.input';
import { UpdateSectorInput } from './dto/update-sector.input';
import { Sector } from './entities/sector.entity';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  create(createSectorInput: CreateSectorInput): Promise<Sector> {
    const sector = this.sectorRepository.create(createSectorInput);
    return this.sectorRepository.save(sector);
  }

  findAll(): Promise<Sector[]> {
    return this.sectorRepository.find();
  }

  findOne(id: number): Promise<Sector> {
    return this.sectorRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateSectorInput: UpdateSectorInput,
  ): Promise<Sector> | null {
    const sector = await this.sectorRepository.findOne({
      where: { id },
    });
    if (sector) {
      this.sectorRepository.merge(sector, updateSectorInput);
      return this.sectorRepository.save(sector);
    }
    throw new Error('Sector not found');
  }

  async remove(id: number): Promise<Sector> | null {
    const sector = await this.sectorRepository.findOne({
      where: { id },
    });
    if (sector) {
      return this.sectorRepository.remove(sector);
    }
    throw new Error('Sector not found');
  }

  getCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}
