import { InputType, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCompanyTypeInput {
  @Column()
  @Field()
  name: string;
}
