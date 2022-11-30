import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Sector {
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;
}
