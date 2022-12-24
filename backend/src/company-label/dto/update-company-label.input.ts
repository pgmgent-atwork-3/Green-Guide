import { CreateCompanyLabelInput } from './create-company-label.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateCompanyLabelInput extends PartialType(
  CreateCompanyLabelInput,
) {
  @Column()
  @Field(() => Int, { nullable: true })
  companyId: number;

  @Column()
  @Field(() => Int, { nullable: true })
  companyRequestId: number;

  @Column()
  @Field(() => Int, { nullable: true })
  labelId: number;

  @Column()
  @Field({ nullable: true })
  motivation: string;

  @Column()
  @Field({ nullable: true })
  approved: boolean;
}
