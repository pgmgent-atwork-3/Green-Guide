import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { CompanyLabelService } from 'src/company-label/company-label.service';
import { CreateCompanyLabelInput } from 'src/company-label/dto/create-company-label.input';
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';
import { CompanyTypeService } from 'src/company-type/company-type.service';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { SectorService } from 'src/sector/sector.service';
import { Repository } from 'typeorm';
import { CreateCompanyRequestInput } from './dto/create-company-request.input';
import { UpdateCompanyRequestInput } from './dto/update-company-request.input';
import { CompanyRequest } from './entities/company-request.entity';

@Injectable()
export class CompanyRequestService {
  constructor(
    @InjectRepository(CompanyRequest)
    private companyRequestRepository: Repository<CompanyRequest>,
    @Inject(forwardRef(() => CompanyLabelService))
    private companyLabelService: CompanyLabelService,
    @Inject(forwardRef(() => CompanyTypeService))
    private companyTypeService: CompanyTypeService,
    @Inject(forwardRef(() => SectorService))
    private sectorService: SectorService,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  async create(
    createCompanyRequestInput: CreateCompanyRequestInput,
  ): Promise<CompanyRequest> {
    const { labels, companyTypeIds, sectorIds, categoryIds, ...rest } =
      createCompanyRequestInput;

    const { id } = await this.companyRequestRepository.save({
      ...rest,
    });

    const companyRequest = await this.companyRequestRepository.findOne({
      where: { id },
      relations: ['labels', 'companyTypes', 'sectors', 'categories'],
    });

    if (labels && labels.length > 0) {
      labels.forEach(async (label) => {
        const companyLabelInput: CreateCompanyLabelInput = {
          ...label,
          companyRequestId: companyRequest.id,
        };
        companyRequest.labels.push(
          await this.companyLabelService.create(companyLabelInput),
        );
      });
    }

    return this.companyRequestRepository.save(companyRequest);
  }

  findAll(): Promise<CompanyRequest[]> {
    return this.companyRequestRepository.find();
  }

  findOne(id: number): Promise<CompanyRequest> {
    return this.companyRequestRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateCompanyRequestInput: UpdateCompanyRequestInput,
    companyTypes: CompanyType[],
    sectors: Sector[],
    categories: Category[],
  ): Promise<CompanyRequest> | null {
    const companyRequest = await this.companyRequestRepository.findOne({
      where: { id },
    });
    if (companyRequest) {
      this.companyRequestRepository.merge(
        companyRequest,
        updateCompanyRequestInput,
      );
      return this.companyRequestRepository.save({
        ...companyRequest,
        companyTypes,
        sectors,
        categories,
      });
    }
    throw new Error('Company-request not found');
  }

  async remove(id: number): Promise<CompanyRequest> | null {
    const companyRequest = await this.companyRequestRepository.findOne({
      where: { id },
    });
    if (companyRequest) {
      return this.companyRequestRepository.remove(companyRequest);
    }
    throw new Error('Company-request not found');
  }

  getLabels(companyRequestId): Promise<CompanyLabel[]> {
    return this.companyLabelService.findByCompanyRequestId(companyRequestId);
  }

  getCompanyType(companyTypeId): Promise<CompanyType> {
    return this.companyTypeService.findOne(companyTypeId);
  }

  getCompanyTypes(companyRequestId): Promise<CompanyType[]> {
    return this.companyRequestRepository
      .createQueryBuilder('companyRequest')
      .leftJoinAndSelect('companyRequest.companyTypes', 'companyType')
      .where('companyRequest.id = :id', { id: companyRequestId })
      .getOne()
      .then((companyRequest) => companyRequest.companyTypes);
  }

  getSector(sectorId): Promise<Sector> {
    return this.sectorService.findOne(sectorId);
  }

  getSectors(companyRequestId): Promise<Sector[]> {
    return this.companyRequestRepository
      .createQueryBuilder('companyRequest')
      .leftJoinAndSelect('companyRequest.sectors', 'sector')
      .where('companyRequest.id = :id', { id: companyRequestId })
      .getOne()
      .then((companyRequest) => companyRequest.sectors);
  }

  getCategory(categoryId): Promise<Category> {
    return this.categoryService.findOne(categoryId);
  }

  getCategories(companyRequestId): Promise<Category[]> {
    return this.companyRequestRepository
      .createQueryBuilder('companyRequest')
      .leftJoinAndSelect('companyRequest.categories', 'category')
      .where('companyRequest.id = :id', { id: companyRequestId })
      .getOne()
      .then((companyRequest) => companyRequest.categories);
  }
}
