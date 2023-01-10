import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CompanyLabelService } from './company-label.service';
import { CompanyLabel } from './entities/company-label.entity';
import { CreateCompanyLabelInput } from './dto/create-company-label.input';
import { UpdateCompanyLabelInput } from './dto/update-company-label.input';
import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { Label } from 'src/label/entities/label.entity';
import { Company } from 'src/company/entities/company.entity';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/Decorators/roles.decorator';
import { Role } from 'src/role.enum';

@Resolver(() => CompanyLabel)
export class CompanyLabelResolver {
  constructor(private readonly companyLabelService: CompanyLabelService) {}

  @Mutation(() => CompanyLabel)
  createCompanyLabel(
    @Args('createCompanyLabelInput')
    createCompanyLabelInput: CreateCompanyLabelInput,
  ): Promise<CompanyLabel> {
    return this.companyLabelService.create(createCompanyLabelInput);
  }

  @Query(() => [CompanyLabel], { name: 'companyLabels' })
  findAll(): Promise<CompanyLabel[]> {
    return this.companyLabelService.findAll();
  }

  @Query(() => CompanyLabel, { name: 'companyLabel' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<CompanyLabel> {
    return this.companyLabelService.findOne(id);
  }

  @Mutation(() => CompanyLabel)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  updateCompanyLabel(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCompanyLabelInput')
    updateCompanyLabelInput: UpdateCompanyLabelInput,
  ): Promise<CompanyLabel> {
    return this.companyLabelService.update(id, updateCompanyLabelInput);
  }

  @Mutation(() => CompanyLabel)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  approveCompanyLabel(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CompanyLabel> {
    return this.companyLabelService.approve(id);
  }

  @Mutation(() => CompanyLabel)
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.COMPANY, Role.SUPERADMIN, Role.ADMIN)
  removeCompanyLabel(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CompanyLabel> | null {
    return this.companyLabelService.remove(id);
  }

  @ResolveField(() => Company)
  company(@Parent() companyLabel: CompanyLabel): Promise<Company> {
    return this.companyLabelService.getCompany(companyLabel.companyId);
  }

  @ResolveField(() => CompanyRequest)
  companyRequest(
    @Parent() companyLabel: CompanyLabel,
  ): Promise<CompanyRequest> {
    return this.companyLabelService.getCompanyRequest(
      companyLabel.companyRequestId,
    );
  }

  @ResolveField(() => Label)
  label(@Parent() companyLabel: CompanyLabel): Promise<Label> {
    return this.companyLabelService.getLabel(companyLabel.labelId);
  }
}
