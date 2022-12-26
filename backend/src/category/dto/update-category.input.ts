import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Column()
  @Field({ nullable: true })
  name?: string;

  @Column()
  @Field({ nullable: true })
  sectorIdN: number;
}
