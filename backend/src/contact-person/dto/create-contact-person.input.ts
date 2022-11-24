import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateContactPersonInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
