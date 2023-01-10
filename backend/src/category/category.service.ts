import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/sector/entities/sector.entity';
import { SectorService } from 'src/sector/sector.service';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @Inject(forwardRef(() => SectorService))
    private sectorService: SectorService,
  ) {}

  create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findBySectorId(sectorId: number): Promise<Category[]> {
    return this.categoryRepository.find({
      where: { sectorId },
    });
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> | null {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    if (category) {
      this.categoryRepository.merge(category, updateCategoryInput);
      return this.categoryRepository.save(category);
    }
    throw new Error('Category not found');
  }

  async remove(id: number): Promise<Category> | null {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    if (category) {
      return this.categoryRepository.remove(category);
    }
    throw new Error('Category not found');
  }

  getSector(sectorId: number): Promise<Sector> {
    return this.sectorService.findOne(sectorId);
  }
}
