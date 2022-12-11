import { CreateCompanyRequestInput } from './create-company-request.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateCompanyRequestInput extends PartialType(
  CreateCompanyRequestInput,
) {
  @Column()
  @Field({ nullable: true })
  btwNumber: number;

  @Column()
  @Field({ nullable: true })
  companyName: string;

  @Column()
  @Field({ nullable: true })
  firstName: string;

  @Column()
  @Field({ nullable: true })
  lastName: string;

  @Column()
  @Field({ nullable: true })
  email: string;

  @Column()
  @Field({ nullable: true })
  tel: string;

  @Column()
  @Field({ nullable: true })
  customerCard: boolean;

  @Column()
  @Field({ nullable: true })
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

  @Column()
  @Field({ nullable: true })
  approved?: boolean;
}
