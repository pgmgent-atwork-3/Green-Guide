import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;
}
