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
import { Label } from 'src/label/entities/label.entity';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { Category } from 'src/category/entities/category.entity';

@Resolver(() => CompanyRequest)
export class CompanyRequestResolver {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  //  Since the labelIds, companyTypeIds, sectorIds and the categoryIds aren't considered an array, default array functions won't work and we need a workaround.
  //  By passing the function we won't have to have to create a new array as a temporary storage for the values.
  noArrayHack = async <T>(input: number, func): Promise<T[]> => {
    const array: T[] = [];
    let i = 0;
    while (input[i]) {
      array.push(func(input[i]));
      i++;
    }
    return array;
  };

  @Mutation(() => CompanyRequest)
  async createCompanyRequest(
    @Args('createCompanyRequestInput')
    createCompanyRequestInput: CreateCompanyRequestInput,
  ): Promise<CompanyRequest> {
    const labels = createCompanyRequestInput.labelIds
      ? await this.noArrayHack<Label>(
          createCompanyRequestInput.labelIds,
          this.companyRequestService.getLabel,
        )
      : null;
    const companyTypes = createCompanyRequestInput.companyTypeIds
      ? await this.noArrayHack<CompanyType>(
          createCompanyRequestInput.companyTypeIds,
          this.companyRequestService.getCompanyType,
        )
      : null;
    const sectors = createCompanyRequestInput.sectorIds
      ? await this.noArrayHack<Sector>(
          createCompanyRequestInput.sectorIds,
          this.companyRequestService.getSector,
        )
      : null;
    const categories = createCompanyRequestInput.categoryIds
      ? await this.noArrayHack<Category>(
          createCompanyRequestInput.categoryIds,
          this.companyRequestService.getCategory,
        )
      : null;

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

  //   @ResolveField(() => Label)
  //   async labels(@Parent() companyRequest: CompanyRequest): Promise<Label[]> {
  //     if (companyRequest.labelIds) {
  //       const labels: Label[] = [];
  //       let i = 0;
  //       while (companyRequest.labelIds[i]) {
  //         labels.push(
  //           await this.companyRequestService.getLabel(companyRequest.labelIds[i]),
  //         );
  //         i++;
  //       }
  //       return labels;
  //     }
  //     return null;
  //   }

  //   @ResolveField(() => CompanyType)
  //   async companyTypes(
  //     @Parent() companyRequest: CompanyRequest,
  //   ): Promise<CompanyType[]> {
  //     if (companyRequest.companyTypeIds) {
  //       const companyTypes: CompanyType[] = [];
  //       let i = 0;
  //       while (companyRequest.companyTypeIds[i]) {
  //         companyTypes.push(
  //           await this.companyRequestService.getCompanyType(
  //             companyRequest.companyTypeIds[i],
  //           ),
  //         );
  //         i++;
  //       }
  //       return companyTypes;
  //     }
  //     return null;
  //   }

  //   @ResolveField(() => Sector)
  //   async sectors(@Parent() companyRequest: CompanyRequest): Promise<Sector[]> {
  //     if (companyRequest.sectorIds) {
  //       const sectors: Sector[] = [];
  //       let i = 0;
  //       while (companyRequest.sectorIds[i]) {
  //         sectors.push(
  //           await this.companyRequestService.getSector(
  //             companyRequest.sectorIds[i],
  //           ),
  //         );
  //         i++;
  //       }
  //       return sectors;
  //     }
  //     return null;
  //   }

  //   @ResolveField(() => Category)
  //   async categories(
  //     @Parent() companyRequest: CompanyRequest,
  //   ): Promise<Category[]> {
  //     if (companyRequest.categoryIds) {
  //       const categories: Category[] = [];
  //       let i = 0;
  //       while (companyRequest.categoryIds[i]) {
  //         categories.push(
  //           await this.companyRequestService.getCategory(
  //             companyRequest.categoryIds[i],
  //           ),
  //         );
  //         i++;
  //       }
  //       return categories;
  //     }
  //     return null;
  //   }
}
