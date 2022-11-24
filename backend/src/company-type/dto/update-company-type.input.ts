import { CreateCompanyTypeInput } from './create-company-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyTypeInput extends PartialType(CreateCompanyTypeInput) {
  @Field(() => Int)
  id: number;
}
