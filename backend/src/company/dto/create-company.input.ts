import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
