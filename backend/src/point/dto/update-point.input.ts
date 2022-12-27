import { CreatePointInput } from './create-point.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdatePointInput extends PartialType(CreatePointInput) {
  @Column()
  @Field(() => Int, { nullable: true })
  amount?: number;

  // TODO: Determine if this is needed
  @Column()
  @Field(() => Int, { nullable: true })
  userId?: number;

  // TODO: Determine if this is needed
  @Column()
  @Field(() => Int, { nullable: true })
  companyId?: number;
}
