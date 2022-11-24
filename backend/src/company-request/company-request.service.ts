import { Injectable } from '@nestjs/common';
import { CreateCompanyRequestInput } from './dto/create-company-request.input';
import { UpdateCompanyRequestInput } from './dto/update-company-request.input';

@Injectable()
export class CompanyRequestService {
  create(createCompanyRequestInput: CreateCompanyRequestInput) {
    return 'This action adds a new companyRequest';
  }

  findAll() {
    return `This action returns all companyRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyRequest`;
  }

  update(id: number, updateCompanyRequestInput: UpdateCompanyRequestInput) {
    return `This action updates a #${id} companyRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyRequest`;
  }
}
