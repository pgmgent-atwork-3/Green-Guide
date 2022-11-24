import { CreateCompanyRequestInput } from './create-company-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyRequestInput extends PartialType(CreateCompanyRequestInput) {
  @Field(() => Int)
  id: number;
}
