import { InputType, Field, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCategoryInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  sectorId: number;
}
