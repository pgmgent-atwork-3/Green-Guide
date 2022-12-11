import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequest } from './entities/company-request.entity';
import { CreateCompanyRequestInput } from './dto/create-company-request.input';
import { UpdateCompanyRequestInput } from './dto/update-company-request.input';

@Resolver(() => CompanyRequest)
export class CompanyRequestResolver {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  @Mutation(() => CompanyRequest)
  createCompanyRequest(
    @Args('createCompanyRequestInput')
    createCompanyRequestInput: CreateCompanyRequestInput,
  ): Promise<CompanyRequest> {
    return this.companyRequestService.create(createCompanyRequestInput);
  }

  @Query(() => [CompanyRequest], { name: 'companyRequests' })
  findAll(): Promise<CompanyRequest[]> {
    return this.companyRequestService.findAll();
  }

  @Query(() => CompanyRequest, { name: 'companyRequest' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CompanyRequest> {
    return this.companyRequestService.findOne(id);
  }

  @Mutation(() => CompanyRequest)
  updateCompanyRequest(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCompanyRequestInput')
    updateCompanyRequestInput: UpdateCompanyRequestInput,
  ): Promise<CompanyRequest> {
    return this.companyRequestService.update(id, updateCompanyRequestInput);
  }

  @Mutation(() => CompanyRequest)
  removeCompanyRequest(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CompanyRequest> | null {
    return this.companyRequestService.remove(id);
  }
}
