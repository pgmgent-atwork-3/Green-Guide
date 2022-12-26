import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class AddCompanyLabelInput {
  @Column()
  @Field(() => Int)
  labelId: number;

  @Column()
  @Field()
  motivation: string;
}
