import { Company } from 'src/company/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field()
  Number: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  zipCode: string;
}
