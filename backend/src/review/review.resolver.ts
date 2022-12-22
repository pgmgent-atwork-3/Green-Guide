import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Roles } from '../Decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Role } from '../role.enum';
import { CurrentUser } from '../Decorators/currentUser.decorator';
import { User } from '../user/entities/user.entity';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  //   @Mutation(() => Review)
  //   @UseGuards(GqlAuthGuard, RolesGuard)
  //   @Roles(Role.USER)
  //   createReview(
  //     @Args('createReviewInput') createReviewInput: CreateReviewInput,
  //     @CurrentUser() user: User,
  //   ): Promise<Review> {
  //     return this.reviewService.create(createReviewInput);
  //   }

  //   @Query(() => [Review], { name: 'review' })
  //   findAll(): Promise<Review[]> {
  //     return this.reviewService.findAll();
  //   }

  //   @Query(() => Review, { name: 'review' })
  //   findOne(@Args('id', { type: () => Int }) id: number): Promise<Review> {
  //     return this.reviewService.findOne(id);
  //   }

  //   @Mutation(() => Review)
  //   @UseGuards(GqlAuthGuard, RolesGuard)
  //   @Roles(Role.USER)
  //   updateReview(
  //     @Args('updateReviewInput') updateReviewInput: UpdateReviewInput,
  //     @Args('id') id: number,
  //     @CurrentUser() user: User,
  //   ): Promise<Review> {
  //     return this.reviewService.update(updateReviewInput.id, updateReviewInput);
  //   }

  //   @Mutation(() => Review)
  //   @UseGuards(GqlAuthGuard, RolesGuard)
  //   @Roles(Role.SUPERADMIN, Role.ADMIN, Role.USER)
  //   removeReview(
  //     @Args('id', { type: () => Int }) id: number,
  //     @CurrentUser() user: User,
  //   ): Promise<Review> {
  //     return this.reviewService.remove(id);
  //   }
}
