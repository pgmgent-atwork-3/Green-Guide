import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
