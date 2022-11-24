import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
@ObjectType()
export class ContactPerson {
  @PrimaryGeneratedColumn()
  @Field(() => IntersectionObserverEntry)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  @IsEmail()
  email: string;

  @Column()
  @Field()
  phoneNumber: string;
}
