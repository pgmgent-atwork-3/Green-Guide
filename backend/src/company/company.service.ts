import { Injectable, Inject } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from 'src/address/address.service';
import { Address } from 'src/address/entities/address.entity';
import { CategoryService } from 'src/category/category.service';
import { CompanyTypeService } from 'src/company-type/company-type.service';
import { ContactPersonService } from 'src/contact-person/contact-person.service';
import { ContactPerson } from 'src/contact-person/entities/contact-person.entity';
import { SectorService } from 'src/sector/sector.service';
import { Repository } from 'typeorm';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @Inject(forwardRef(() => ContactPersonService))
    private contactPersonService: ContactPersonService,
    @Inject(forwardRef(() => AddressService))
    private addressService: AddressService,
    @Inject(forwardRef(() => CompanyTypeService))
    private companyTypeService: CompanyTypeService,
    @Inject(forwardRef(() => SectorService))
    private sectorService: SectorService,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  async create(createCompanyInput: CreateCompanyInput): Promise<Company> {
    const { companyTypeIds, sectorIds, categoryIds, ...rest } =
      createCompanyInput;

    const companyInput = this.companyRepository.create({ ...rest });

    const company = await this.companyRepository.save(companyInput);

    if (companyTypeIds && companyTypeIds.length > 0) {
      company.companyTypes = [];
      companyTypeIds.forEach(async (companyTypeId) => {
        company.companyTypes.push(
          await this.companyTypeService.findOne(companyTypeId),
        );
      });
    }

    if (sectorIds && sectorIds.length > 0) {
      company.sectors = [];
      sectorIds.forEach(async (sectorId) => {
        company.sectors.push(await this.sectorService.findOne(sectorId));
      });
    }

    if (categoryIds && categoryIds.length > 0) {
      company.categories = [];
      categoryIds.forEach(async (categoryId) => {
        company.categories.push(await this.categoryService.findOne(categoryId));
      });
    }

    return this.companyRepository.save({
      ...company,
    });
  }

  findAll(): Promise<Company[]> {
    return this.companyRepository.find({
      relations: ['labels', 'companyTypes', 'sectors', 'categories'],
    });
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOne({
      where: { id },
      relations: ['labels', 'companyTypes', 'sectors', 'categories'],
    });
  }

  async update(
    id: number,
    updateCompanyInput: UpdateCompanyInput,
  ): Promise<Company> | null {
    const company = await this.companyRepository.findOne({ where: { id } });
    if (company) {
      this.companyRepository.merge(company, updateCompanyInput);
      return this.companyRepository.save(company);
    }
    throw new Error('Company not found');
  }

  async remove(id: number): Promise<Company> | null {
    const company = await this.companyRepository.findOne({ where: { id } });
    if (company) {
      await this.companyRepository.remove(company);
      await this.contactPersonService.remove(company.contactPersonId);
      await this.addressService.remove(company.addressId);
      return company;
    }
    throw new Error('Company not found');
  }

  getContactPerson(contactPersonId: number): Promise<ContactPerson> {
    return this.contactPersonService.findOne(contactPersonId);
  }

  getAddress(addressId: number): Promise<Address> {
    return this.addressService.findOne(addressId);
  }
}
