import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyRequestInput } from './dto/create-company-request.input';
import { UpdateCompanyRequestInput } from './dto/update-company-request.input';
import { CompanyRequest } from './entities/company-request.entity';

@Injectable()
export class CompanyRequestService {
  constructor(
    @InjectRepository(CompanyRequest)
    private companyRequestRepository: Repository<CompanyRequest>,
  ) {}

  create(
    createCompanyRequestInput: CreateCompanyRequestInput,
  ): Promise<CompanyRequest> {
    const companyRequest = this.companyRequestRepository.create({
      ...createCompanyRequestInput,
      approved: false,
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
  ): Promise<CompanyRequest> | null {
    const companyRequest = await this.companyRequestRepository.findOne({
      where: { id },
    });
    if (companyRequest) {
      this.companyRequestRepository.merge(
        companyRequest,
        updateCompanyRequestInput,
      );
      return this.companyRequestRepository.save(companyRequest);
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
}
