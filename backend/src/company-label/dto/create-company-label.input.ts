import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCompanyLabelInput {
  @Column()
  @Field(() => Int, { nullable: true })
  companyId: number;

  @Column()
  @Field(() => Int, { nullable: true })
  companyRequestId: number;

  //   @Column()
  //   @Field(() => Int)
  //   labelId: number;

  @Column()
  @Field()
  motivation: string;
}
