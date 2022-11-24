import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSectorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
