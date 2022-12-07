import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateReviewInput {
  @Column()
  @Field()
  content: string;

  @Column()
  @Field()
  rating: number;

  @Column()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field(() => Int)
  companyId: number;
}
