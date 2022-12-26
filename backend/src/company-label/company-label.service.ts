import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRequestService } from 'src/company-request/company-request.service';
import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/entities/company.entity';
import { Label } from 'src/label/entities/label.entity';
import { LabelService } from 'src/label/label.service';
import { Repository } from 'typeorm';
import { CreateCompanyLabelInput } from './dto/create-company-label.input';
import { UpdateCompanyLabelInput } from './dto/update-company-label.input';
import { CompanyLabel } from './entities/company-label.entity';

@Injectable()
export class CompanyLabelService {
  constructor(
    @InjectRepository(CompanyLabel)
    private companyLabelRepository: Repository<CompanyLabel>,
    @Inject(forwardRef(() => CompanyService))
    private companyService: CompanyService,
    @Inject(forwardRef(() => CompanyRequestService))
    private companyRequestService: CompanyRequestService,
    @Inject(forwardRef(() => LabelService))
    private labelService: LabelService,
  ) {}

  create(
    createCompanyLabelInput: CreateCompanyLabelInput,
  ): Promise<CompanyLabel> {
    const companyLabel = this.companyLabelRepository.create({
      ...createCompanyLabelInput,
      approved: false,
    });
    return this.companyLabelRepository.save(companyLabel);
  }

  findAll(): Promise<CompanyLabel[]> {
    return this.companyLabelRepository.find();
  }

  findByCompanyRequestId(companyRequestId: number): Promise<CompanyLabel[]> {
    return this.companyLabelRepository.find({
      where: { companyRequestId },
    });
  }

  findOne(id: number): Promise<CompanyLabel> {
    return this.companyLabelRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateCompanyLabelInput: UpdateCompanyLabelInput,
  ): Promise<CompanyLabel> | null {
    const companyLabel = await this.companyLabelRepository.findOne({
      where: { id },
    });
    if (companyLabel) {
      this.companyLabelRepository.merge(companyLabel, updateCompanyLabelInput);
      return this.companyLabelRepository.save(companyLabel);
    }
    throw new Error('CompanyLabel not found');
  }

  async remove(id: number): Promise<CompanyLabel> | null {
    const companyLabel = await this.companyLabelRepository.findOne({
      where: { id },
    });
    if (companyLabel) {
      return this.companyLabelRepository.remove(companyLabel);
    }
    throw new Error('CompanyLabel not found');
  }

  //   getCompany(companyId: number): Promise<Company> {
  //     return this.companyService.findOne(companyId);
  //   }

  getCompanyRequest(companyRequestId: number): Promise<CompanyRequest> {
    return this.companyRequestService.findOne(companyRequestId);
  }

  getLabel(labelId: number): Promise<Label> {
    return this.labelService.findOne(labelId);
  }
}
