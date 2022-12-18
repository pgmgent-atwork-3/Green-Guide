import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Role } from '../role.enum';
import { Roles } from '../Decorators/roles.decorator';
import { User } from '../user/entities/user.entity';
import { CurrentUser } from '../Decorators/currentUser.decorator';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => Company)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
    @CurrentUser() user: User,
  ): Promise<Company> {
    return this.companyService.create(createCompanyInput);
  }

  @Query(() => [Company], { name: 'company' })
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Company> {
    return this.companyService.findOne(id);
  }

  // TODO need to discuss how to secure this
  @Mutation(() => Company)
  updateCompany(
    @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput,
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Company> {
    return this.companyService.update(id, updateCompanyInput);
  }

  @Mutation(() => Company)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN, Role.COMPANY)
  removeCompany(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<Company> {
    return this.companyService.remove(id);
  }
}
