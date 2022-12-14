import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreatePointInput {
  @Column()
  @Field(() => Int)
  amount: number;

  @Column()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field(() => Int)
  companyId: number;
}
