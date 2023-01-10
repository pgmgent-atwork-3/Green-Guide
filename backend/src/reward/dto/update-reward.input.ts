import { CreateRewardInput } from './create-reward.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Min } from 'class-validator';

@InputType()
export class UpdateRewardInput extends PartialType(CreateRewardInput) {
  @Column()
  @Field({ nullable: true })
  name?: string;

  @Column()
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field(() => Int, { nullable: true })
  @Min(0)
  points?: number;

  //   TODO: Determine if this is needed
  @Column()
  @Field(() => Int, { nullable: true })
  companyId?: number;
}
