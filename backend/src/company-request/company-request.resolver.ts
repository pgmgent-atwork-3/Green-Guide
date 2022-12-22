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
import { Label } from 'src/label/entities/label.entity';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { Category } from 'src/category/entities/category.entity';

@Resolver(() => CompanyRequest)
export class CompanyRequestResolver {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  //  Since the labelIds, companyTypeIds, sectorIds and the categoryIds aren't considered an array, default array functions won't work and we need a workaround.
  //  By passing the function we won't have to have to create a new array as a temporary storage for the values.
  //   noArrayHack = async <T>(input: number, func): Promise<T[]> => {
  //     const array: T[] = [];
  //     let i = 0;
  //     while (input[i]) {
  //       array.push(func(input[i]));
  //       i++;
  //     }
  //     return array;
  //   };

  @Mutation(() => CompanyRequest)
  async createCompanyRequest(
    @Args('createCompanyRequestInput')
    createCompanyRequestInput: CreateCompanyRequestInput,
  ): Promise<CompanyRequest> {
    // const labels = createCompanyRequestInput.labelIds
    //   ? await this.noArrayHack<Label>(
    //       createCompanyRequestInput.labelIds,
    //       this.companyRequestService.getLabel,
    //     )
    //   : null;
    const labels: Label[] = [];
    if (createCompanyRequestInput.labelIds) {
      let i = 0;
      while (createCompanyRequestInput.labelIds[i]) {
        labels.push(
          await this.companyRequestService.getLabel(
            createCompanyRequestInput.labelIds[i],
          ),
        );
        i++;
      }
    }
    const companyTypes: CompanyType[] = [];
    if (createCompanyRequestInput.companyTypeIds) {
      let i = 0;
      while (createCompanyRequestInput.companyTypeIds[i]) {
        companyTypes.push(
          await this.companyRequestService.getCompanyType(
            createCompanyRequestInput.companyTypeIds[i],
          ),
        );
        i++;
      }
    }
    const sectors: Sector[] = [];
    if (createCompanyRequestInput.sectorIds) {
      let i = 0;
      while (createCompanyRequestInput.sectorIds[i]) {
        sectors.push(
          await this.companyRequestService.getSector(
            createCompanyRequestInput.sectorIds[i],
          ),
        );
        i++;
      }
    }
    const categories: Category[] = [];
    if (createCompanyRequestInput.categoryIds) {
      let i = 0;
      while (createCompanyRequestInput.categoryIds[i]) {
        categories.push(
          await this.companyRequestService.getCategory(
            createCompanyRequestInput.categoryIds[i],
          ),
        );
        i++;
      }
    }

    return this.companyRequestService.create(
      createCompanyRequestInput,
      labels,
      companyTypes,
      sectors,
      categories,
    );
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
    const labels: Label[] = [];
    if (updateCompanyRequestInput.labelIds) {
      let i = 0;
      while (updateCompanyRequestInput.labelIds[i]) {
        labels.push(
          await this.companyRequestService.getLabel(
            updateCompanyRequestInput.labelIds[i],
          ),
        );
        i++;
      }
    }
    const companyTypes: CompanyType[] = [];
    if (updateCompanyRequestInput.companyTypeIds) {
      let i = 0;
      while (updateCompanyRequestInput.companyTypeIds[i]) {
        companyTypes.push(
          await this.companyRequestService.getCompanyType(
            updateCompanyRequestInput.companyTypeIds[i],
          ),
        );
        i++;
      }
    }
    const sectors: Sector[] = [];
    if (updateCompanyRequestInput.sectorIds) {
      let i = 0;
      while (updateCompanyRequestInput.sectorIds[i]) {
        sectors.push(
          await this.companyRequestService.getSector(
            updateCompanyRequestInput.sectorIds[i],
          ),
        );
        i++;
      }
    }
    const categories: Category[] = [];
    if (updateCompanyRequestInput.categoryIds) {
      let i = 0;
      while (updateCompanyRequestInput.categoryIds[i]) {
        categories.push(
          await this.companyRequestService.getCategory(
            updateCompanyRequestInput.categoryIds[i],
          ),
        );
        i++;
      }
    }
    return this.companyRequestService.update(
      id,
      updateCompanyRequestInput,
      labels,
      companyTypes,
      sectors,
      categories,
    );
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

  @ResolveField(() => Label)
  async labels(@Parent() companyRequest: CompanyRequest): Promise<Label[]> {
    return this.companyRequestService.getLabels(companyRequest.id);
  }

  @ResolveField(() => CompanyType)
  async companyTypes(
    @Parent() companyRequest: CompanyRequest,
  ): Promise<CompanyType[]> {
    return this.companyRequestService.getCompanyTypes(companyRequest.id);
  }

  @ResolveField(() => Sector)
  async sectors(@Parent() companyRequest: CompanyRequest): Promise<Sector[]> {
    return this.companyRequestService.getSectors(companyRequest.id);
  }

  @ResolveField(() => Category)
  async categories(
    @Parent() companyRequest: CompanyRequest,
  ): Promise<Category[]> {
    return this.companyRequestService.getCategories(companyRequest.id);
  }

  //   @ResolveField(() => Label)
  //   async labels(
  //     @Parent() companyRequest: CompanyRequest,
  //   ): Promise<Label[]> {
  //     if (companyRequest.labelIds) {
  //       const labels: Label[] = [];
  //       let i = 0;
  //       while (companyRequest.labelIds[i]) {
  //         labels.push(
  //           await this.companyRequestService.getLabel(
  //             companyRequest.labelIds[i],
  //           ),
  //         );
  //         i++;
  //       }
  //       return labels;
  //     }
  //     return null;
  //   }
}
