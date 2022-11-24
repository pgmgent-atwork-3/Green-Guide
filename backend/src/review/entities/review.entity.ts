import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Review {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  content: string;

  @Column()
  @Field()
  @Min(1)
  @Max(5)
  rating: number;
}
