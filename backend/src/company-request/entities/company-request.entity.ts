import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CompanyRequest {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  btwNumber: number;

  @Column()
  @Field()
  companyName: string;

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
  tel: string;

  @Column()
  @Field()
  customerCard: boolean;

  @Column({ nullable: true })
  @Field({ nullable: true })
  comment?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  localProduct?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  fairtrade?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  biological?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  secondHand?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  socialEmployment?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  civilCooperative?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  fairSalary?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  inclusion?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  durableTransport?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  accessibility?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  renewableEnergy?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  ethicalBanking?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  recycling?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  garbageSorting?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  wasteFree?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  reusingWater?: string;

  @Column()
  @Field()
  approved: boolean;
}
