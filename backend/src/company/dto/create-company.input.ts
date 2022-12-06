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
  @Field()
  pointIds: number[];

  @Column()
  @Field()
  rewardIds: number[];

  @Column()
  @Field()
  reviewIds: number[];

  @Column()
  @Field()
  companyTypeIds: number[];

  @Column()
  @Field()
  contactPersonId: number;

  @Column()
  @Field()
  addressId: number;

  @Column()
  @Field()
  sectorIds: number[];

  @Column()
  @Field()
  categoryIds: number[];

  @Column()
  @Field()
  companyRequestId: number;
}
