import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyTypeInput } from './dto/create-company-type.input';
import { UpdateCompanyTypeInput } from './dto/update-company-type.input';
import { CompanyType } from './entities/company-type.entity';

@Injectable()
export class CompanyTypeService {
  constructor(
    @InjectRepository(CompanyType)
    private companyTypeRepository: Repository<CompanyType>,
  ) {}

  create(createCompanyTypeInput: CreateCompanyTypeInput): Promise<CompanyType> {
    const companyType = this.companyTypeRepository.create(
      createCompanyTypeInput,
    );
    return this.companyTypeRepository.save(companyType);
  }

  findAll(): Promise<CompanyType[]> {
    return this.companyTypeRepository.find();
  }

  findOne(id: number): Promise<CompanyType> {
    return this.companyTypeRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateCompanyTypeInput: UpdateCompanyTypeInput,
  ): Promise<CompanyType> | null {
    const companyType = await this.companyTypeRepository.findOne({
      where: { id },
    });
    if (companyType) {
      this.companyTypeRepository.merge(companyType, updateCompanyTypeInput);
      return this.companyTypeRepository.save(companyType);
    }
    throw new Error('CompanyType not found');
  }

  async remove(id: number): Promise<CompanyType> | null {
    const companyType = await this.companyTypeRepository.findOne({
      where: { id },
    });
    if (companyType) {
      return this.companyTypeRepository.remove(companyType);
    }
    throw new Error('CompanyType not found');
  }
}
