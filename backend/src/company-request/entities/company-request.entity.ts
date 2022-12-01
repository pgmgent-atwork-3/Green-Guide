import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  tel: number;

  @Column()
  @Field()
  customerCard: boolean;

  @Column()
  @Field()
  comment: string;

  @Column()
  @Field({ nullable: true })
  localProduct: string;

  @Column()
  @Field({ nullable: true })
  fairtrade: string;

  @Column()
  @Field({ nullable: true })
  biological: string;

  @Column()
  @Field({ nullable: true })
  secondHand: string;

  @Column()
  @Field({ nullable: true })
  socialEmployment: string;

  @Column()
  @Field({ nullable: true })
  civilCooperative: string;

  @Column()
  @Field({ nullable: true })
  fairSalary: string;

  @Column()
  @Field({ nullable: true })
  inclusion: string;

  @Column()
  @Field({ nullable: true })
  durableTransport: string;

  @Column()
  @Field({ nullable: true })
  accessibility: string;

  @Column()
  @Field({ nullable: true })
  renewableEnergy: string;

  @Column()
  @Field({ nullable: true })
  ethicalBanking: string;

  @Column()
  @Field({ nullable: true })
  recycling: string;

  @Column()
  @Field({ nullable: true })
  garbageSorting: string;

  @Column()
  @Field({ nullable: true })
  wasteFree: string;

  @Column()
  @Field({ nullable: true })
  reusingWater: string;

  @OneToOne(() => Company, (company) => company.companyRequest)
  @Field(() => Company)
  company?: Company;
}
