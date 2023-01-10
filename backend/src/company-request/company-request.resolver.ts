import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CompanyRequestService } from './company-request.service';
import { CompanyRequest } from './entities/company-request.entity';
import { CreateCompanyRequestInput } from './dto/create-company-request.input';
import { UpdateCompanyRequestInput } from './dto/update-company-request.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Role } from '../role.enum';
import { Roles } from '../Decorators/roles.decorator';
import { CurrentUser } from '../Decorators/currentUser.decorator';
import { User } from '../user/entities/user.entity';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { Category } from 'src/category/entities/category.entity';
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';
import { Company } from 'src/company/entities/company.entity';

@Resolver(() => CompanyRequest)
export class CompanyRequestResolver {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  @Mutation(() => CompanyRequest)
  async createCompanyRequest(
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
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN, Role.COMPANY)
  async updateCompanyRequest(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCompanyRequestInput')
    updateCompanyRequestInput: UpdateCompanyRequestInput,
    @CurrentUser() user: User,
  ): Promise<CompanyRequest> {
    return this.companyRequestService.update(id, updateCompanyRequestInput);
  }

  @Mutation(() => Company)
  //   @UseGuards(GqlAuthGuard, RolesGuard)
  //   @Roles(Role.SUPERADMIN, Role.ADMIN)
  async approveCompanyRequest(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Company> {
    return this.companyRequestService.approve(id);
  }

  @Mutation(() => CompanyRequest)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN, Role.COMPANY)
  removeCompanyRequest(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<CompanyRequest> | null {
    return this.companyRequestService.remove(id);
  }

  @ResolveField(() => CompanyLabel)
  labels(
    @Parent() companyRequest: CompanyRequest,
  ): Promise<CompanyLabel[]> | null {
    return this.companyRequestService.getLabels(companyRequest.id);
  }

  @ResolveField(() => CompanyType)
  companyTypes(
    @Parent() companyRequest: CompanyRequest,
  ): Promise<CompanyType[]> {
    return this.companyRequestService.getCompanyTypes(companyRequest.id);
  }

  @ResolveField(() => Sector)
  sectors(@Parent() companyRequest: CompanyRequest): Promise<Sector[]> {
    return this.companyRequestService.getSectors(companyRequest.id);
  }

  @ResolveField(() => Category)
  categories(@Parent() companyRequest: CompanyRequest): Promise<Category[]> {
    return this.companyRequestService.getCategories(companyRequest.id);
  }
}
