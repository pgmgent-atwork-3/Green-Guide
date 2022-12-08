import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyTypeService } from './company-type.service';
import { CompanyType } from './entities/company-type.entity';
import { CreateCompanyTypeInput } from './dto/create-company-type.input';
import { UpdateCompanyTypeInput } from './dto/update-company-type.input';

@Resolver(() => CompanyType)
export class CompanyTypeResolver {
  constructor(private readonly companyTypeService: CompanyTypeService) {}

  @Mutation(() => CompanyType)
  createCompanyType(
    @Args('createCompanyTypeInput') createCompanyTypeInput: CreateCompanyTypeInput
    ): Promise<CompanyType> {
    return this.companyTypeService.create(createCompanyTypeInput);
  }

  @Query(() => [CompanyType], { name: 'companyType' })
  findAll() {
    return this.companyTypeService.findAll();
  }

  @Query(() => CompanyType, { name: 'companyType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.companyTypeService.findOne(id);
  }

  @Mutation(() => CompanyType)
  updateCompanyType(@Args('updateCompanyTypeInput') updateCompanyTypeInput: UpdateCompanyTypeInput) {
    return this.companyTypeService.update(updateCompanyTypeInput.id, updateCompanyTypeInput);
  }

  @Mutation(() => CompanyType)
  removeCompanyType(@Args('id', { type: () => Int }) id: number) {
    return this.companyTypeService.remove(id);
  }
}
