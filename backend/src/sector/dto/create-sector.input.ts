import { InputType, Field, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateSectorInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => [Int], { nullable: true })
  categorieIds: number[];
}
