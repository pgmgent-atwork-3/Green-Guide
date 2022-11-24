import { Injectable } from '@nestjs/common';
import { CreateCompanyTypeInput } from './dto/create-company-type.input';
import { UpdateCompanyTypeInput } from './dto/update-company-type.input';

@Injectable()
export class CompanyTypeService {
  create(createCompanyTypeInput: CreateCompanyTypeInput) {
    return 'This action adds a new companyType';
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
