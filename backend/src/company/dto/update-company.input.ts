import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Column()
  @Field({ nullable: true })
  name?: string;

  @Column()
  @Field({ nullable: true })
  summary?: string;

  @Column()
  @Field({ nullable: true })
  established?: Date;

  @Column()
  @Field({ nullable: true })
  openingHours?: string;

  @Column()
  @Field(() => Int, { nullable: true })
  contactPersonId?: number;

  @Column()
  @Field(() => Int, { nullable: true })
  addressId?: number;

  @Column()
  @Field(() => Int, { nullable: true })
  labelIds?: number[];

  @Column()
  @Field(() => Int, { nullable: true })
  companyTypeIds?: number[];

  @Column()
  @Field(() => Int, { nullable: true })
  sectorIds?: number[];

  @Column()
  @Field(() => Int, { nullable: true })
  categoryIds?: number[];
}
