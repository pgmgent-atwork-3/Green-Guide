import { InputType, Int, Field } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateRewardInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field(() => Int)
  @Min(0)
  points: number;

  @Column()
  @Field(() => Int)
  companyId: number;
}
