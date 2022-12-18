import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyTypeService } from './company-type.service';
import { CompanyType } from './entities/company-type.entity';
import { CreateCompanyTypeInput } from './dto/create-company-type.input';
import { UpdateCompanyTypeInput } from './dto/update-company-type.input';
import { Roles } from '../Decorators/roles.decorator';
import { Role } from '../role.enum';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { CurrentUser } from '../Decorators/currentUser.decorator';
import { User } from '../user/entities/user.entity';

@Resolver(() => CompanyType)
export class CompanyTypeResolver {
  constructor(private readonly companyTypeService: CompanyTypeService) {}

  @Mutation(() => CompanyType)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  createCompanyType(
    @Args('createCompanyTypeInput')
    createCompanyTypeInput: CreateCompanyTypeInput,
    @CurrentUser() user: User,
  ): Promise<CompanyType> {
    return this.companyTypeService.create(createCompanyTypeInput);
  }

  @Query(() => [CompanyType], { name: 'companyTypes' })
  findAll(): Promise<CompanyType[]> {
    return this.companyTypeService.findAll();
  }

  @Query(() => CompanyType, { name: 'companyType' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<CompanyType> {
    return this.companyTypeService.findOne(id);
  }

  @Mutation(() => CompanyType)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  updateCompanyType(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCompanyTypeInput')
    updateCompanyTypeInput: UpdateCompanyTypeInput,
    @CurrentUser() user: User,
  ) {
    return this.companyTypeService.update(id, updateCompanyTypeInput);
  }

  @Mutation(() => CompanyType)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  removeCompanyType(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<CompanyType> | null {
    return this.companyTypeService.remove(id);
  }
}
