import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from 'src/address/address.service';
import { CreateAddressInput } from 'src/address/dto/create-address.input';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { CompanyLabelService } from 'src/company-label/company-label.service';
import { CreateCompanyLabelInput } from 'src/company-label/dto/create-company-label.input';
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';
import { CompanyTypeService } from 'src/company-type/company-type.service';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { CompanyService } from 'src/company/company.service';
import { CreateCompanyInput } from 'src/company/dto/create-company.input';
import { Company } from 'src/company/entities/company.entity';
import { ContactPersonService } from 'src/contact-person/contact-person.service';
import { CreateContactPersonInput } from 'src/contact-person/dto/create-contact-person.input';
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
    @Inject(forwardRef(() => ContactPersonService))
    private contactPersonService: ContactPersonService,
    @Inject(forwardRef(() => AddressService))
    private addressService: AddressService,
    @Inject(forwardRef(() => CompanyService))
    private companyService: CompanyService,
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

    if (companyTypeIds && companyTypeIds.length > 0) {
      companyTypeIds.forEach(async (companyTypeId) => {
        companyRequest.companyTypes.push(
          await this.companyTypeService.findOne(companyTypeId),
        );
      });
    }

    if (sectorIds && sectorIds.length > 0) {
      sectorIds.forEach(async (sectorId) => {
        companyRequest.sectors.push(await this.sectorService.findOne(sectorId));
      });
    }

    if (categoryIds && categoryIds.length > 0) {
      categoryIds.forEach(async (categoryId) => {
        companyRequest.categories.push(
          await this.categoryService.findOne(categoryId),
        );
      });
    }

    await this.companyRequestRepository.save(companyRequest);
    return companyRequest;
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
    const { labels, companyTypeIds, sectorIds, categoryIds, ...rest } =
      updateCompanyRequestInput;

    const companyRequest = await this.companyRequestRepository.findOne({
      where: { id },
    });
    if (companyRequest) {
      this.companyRequestRepository.merge(companyRequest, { ...rest });

      if (labels && labels.length > 0) {
        // Get all labels for the company-request
        const companyLabels =
          await this.companyLabelService.findByCompanyRequestId(
            companyRequest.id,
          );

        // Delete all labels that are not in the new list
        companyLabels.forEach(async (companyLabel) => {
          if (!labels.find((label) => label.labelId == companyLabel.labelId)) {
            await this.companyLabelService.remove(companyLabel.id);
          }
        });

        // Add all labels that are not in the old list
        labels.forEach(async (label) => {
          if (
            !companyLabels.find(
              (companyLabel) => companyLabel.labelId == label.labelId,
            )
          ) {
            const companyLabelInput: CreateCompanyLabelInput = {
              ...label,
              companyRequestId: companyRequest.id,
            };
            companyRequest.labels.push(
              await this.companyLabelService.create(companyLabelInput),
            );
          }
        });
      }

      if (companyTypeIds && companyTypeIds.length > 0) {
        companyRequest.companyTypes = [];
        companyTypeIds.forEach(async (companyTypeId) => {
          companyRequest.companyTypes.push(
            await this.companyTypeService.findOne(companyTypeId),
          );
        });
      }

      if (sectorIds && sectorIds.length > 0) {
        companyRequest.sectors = [];
        sectorIds.forEach(async (sectorId) => {
          companyRequest.sectors.push(
            await this.sectorService.findOne(sectorId),
          );
        });
      }

      if (categoryIds && categoryIds.length > 0) {
        companyRequest.categories = [];
        categoryIds.forEach(async (categoryId) => {
          companyRequest.categories.push(
            await this.categoryService.findOne(categoryId),
          );
        });
      }
      return this.companyRequestRepository.save({
        ...companyRequest,
      });
    }
    throw new Error('Company-request not found');
  }

  async approve(id: number): Promise<Company> | null {
    const companyRequest = await this.companyRequestRepository.findOne({
      where: { id },
      relations: ['labels', 'companyTypes', 'sectors', 'categories'],
    });
    if (companyRequest) {
      // Create a contactperson
      const contactPersonInput: CreateContactPersonInput = {
        firstName: companyRequest.firstName,
        lastName: companyRequest.lastName,
        email: companyRequest.email,
        phoneNumber: companyRequest.phoneNumber,
      };

      const contactPerson = await this.contactPersonService.create(
        contactPersonInput,
      );

      // Create an address
      const addressInput: CreateAddressInput = {
        streetName: companyRequest.streetName,
        number: companyRequest.houseNumber,
        zipCode: companyRequest.zipCode,
        city: companyRequest.city,
      };

      const address = await this.addressService.create(addressInput);

      // Create a company
      const companyInput: CreateCompanyInput = {
        name: companyRequest.companyName,
        summary: companyRequest.summary,
        established: companyRequest.established,
        openingHours: companyRequest.openingHours,

        contactPersonId: contactPerson.id,
        addressId: address.id,
        companyTypeIds: companyRequest.companyTypes.map(
          (companyType) => companyType.id,
        ),
        sectorIds: companyRequest.sectors.map((sector) => sector.id),
        categoryIds: companyRequest.categories.map((category) => category.id),
      };

      const company = await this.companyService.create(companyInput);

      // Update company-labels to reference company instead of company-request
      companyRequest.labels.forEach(async (label) => {
        await this.companyLabelService.update(label.id, {
          companyId: company.id,
          companyRequestId: null,
        });
      });

      // Remove company-request
      await this.remove(companyRequest.id);

      return this.companyService.findOne(company.id);
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
