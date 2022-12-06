import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCompanyRequestInput {
  @Column()
  @Field()
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
  accessibliity: string;

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
}
