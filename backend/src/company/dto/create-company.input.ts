import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCompanyInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  summary: string;

  @Column()
  @Field()
  established: Date;

  @Column()
  @Field()
  openingHours: string;

  @Column()
  @Field()
  btwNumber: number;

  @Column()
  @Field(() => Int)
  pointIds: number[];

  @Column()
  @Field(() => Int)
  rewardIds: number[];

  @Column()
  @Field(() => Int)
  reviewIds: number[];

  @Column()
  @Field(() => Int)
  companyTypeIds: number[];

  @Column()
  @Field(() => Int)
  contactPersonId: number;

  @Column()
  @Field(() => Int)
  addressId: number;

  @Column()
  @Field(() => Int)
  sectorIds: number[];

  @Column()
  @Field(() => Int)
  categoryIds: number[];

  @Column()
  @Field(() => Int)
  companyRequestId: number;
}
