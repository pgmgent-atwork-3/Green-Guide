import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRewardInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
