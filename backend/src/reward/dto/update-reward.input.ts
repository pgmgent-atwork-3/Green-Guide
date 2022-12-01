import { CreateRewardInput } from './create-reward.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRewardInput extends PartialType(CreateRewardInput) {
  @Field(() => Int)
  id: number;
}
