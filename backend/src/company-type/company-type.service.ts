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
    const companyType =  this.companyTypeRepository.create(createCompanyTypeInput);
    return this.companyTypeRepository.save(companyType);
  }

  findAll() {
    return `This action returns all companyType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyType`;
  }

  update(id: number, updateCompanyTypeInput: UpdateCompanyTypeInput) {
    return `This action updates a #${id} companyType`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyType`;
  }
}
