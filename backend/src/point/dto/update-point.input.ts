import { CreatePointInput } from './create-point.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdatePointInput extends PartialType(CreatePointInput) {
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
