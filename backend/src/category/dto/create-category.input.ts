import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCategoryInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  sectorId: number;
}
