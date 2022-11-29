import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequest } from './entities/company-request.entity';
import { CreateCompanyRequestInput } from './dto/create-company-request.input';
import { UpdateCompanyRequestInput } from './dto/update-company-request.input';

@Resolver(() => CompanyRequest)
export class CompanyRequestResolver {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  @Mutation(() => CompanyRequest)
  createCompanyRequest(@Args('createCompanyRequestInput') createCompanyRequestInput: CreateCompanyRequestInput) {
    return this.companyRequestService.create(createCompanyRequestInput);
  }

  @Query(() => [CompanyRequest], { name: 'companyRequest' })
  findAll() {
    return this.companyRequestService.findAll();
  }

  @Query(() => CompanyRequest, { name: 'companyRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.companyRequestService.findOne(id);
  }

  @Mutation(() => CompanyRequest)
  updateCompanyRequest(@Args('updateCompanyRequestInput') updateCompanyRequestInput: UpdateCompanyRequestInput) {
    return this.companyRequestService.update(updateCompanyRequestInput.id, updateCompanyRequestInput);
  }

  @Mutation(() => CompanyRequest)
  removeCompanyRequest(@Args('id', { type: () => Int }) id: number) {
    return this.companyRequestService.remove(id);
  }
}
