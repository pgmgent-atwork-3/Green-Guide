import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { CompanyTypeService } from 'src/company-type/company-type.service';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Label } from 'src/label/entities/label.entity';
import { LabelService } from 'src/label/label.service';
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
    @Inject(forwardRef(() => LabelService))
    private labelService: LabelService,
    @Inject(forwardRef(() => CompanyTypeService))
    private companyTypeService: CompanyTypeService,
    @Inject(forwardRef(() => SectorService))
    private sectorService: SectorService,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  create(
    createCompanyRequestInput: CreateCompanyRequestInput,
    labels: Label[],
    companyTypes: CompanyType[],
    sectors: Sector[],
    categories: Category[],
  ): Promise<CompanyRequest> {
    const companyRequest = this.companyRequestRepository.create({
      ...createCompanyRequestInput,
      approved: false,
      labels,
      companyTypes,
      sectors,
      categories,
    });
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
    labels: Label[],
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
        labels,
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

  getLabel(labelId): Promise<Label> {
    return this.labelService.findOne(labelId);
  }

  getLabels(companyRequestId): Promise<Label[]> {
    return this.companyRequestRepository
      .createQueryBuilder('companyRequest')
      .leftJoinAndSelect('companyRequest.labels', 'label')
      .where('companyRequest.id = :id', { id: companyRequestId })
      .getOne()
      .then((companyRequest) => companyRequest.labels);
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
