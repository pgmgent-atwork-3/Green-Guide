import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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

@Resolver(() => CompanyRequest)
export class CompanyRequestResolver {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  // TODO need to discus how to secure this
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
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN, Role.COMPANY)
  updateCompanyRequest(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCompanyRequestInput')
    updateCompanyRequestInput: UpdateCompanyRequestInput,
    @CurrentUser() user: User,
  ): Promise<CompanyRequest> {
    return this.companyRequestService.update(id, updateCompanyRequestInput);
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
}
