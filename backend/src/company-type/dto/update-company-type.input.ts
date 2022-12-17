import { CreateCompanyTypeInput } from './create-company-type.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateCompanyTypeInput extends PartialType(
  CreateCompanyTypeInput,
) {
  @Column()
  @Field()
  name: string;
}
