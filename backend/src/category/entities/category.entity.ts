import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @Column()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;
}
