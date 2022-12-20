import { CreateCompanyRequestInput } from './create-company-request.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { IsEmail } from 'class-validator';

@InputType()
export class UpdateCompanyRequestInput extends PartialType(
  CreateCompanyRequestInput,
) {
  @Column()
  @Field({ nullable: true })
  approved: boolean;

  @Column()
  @Field({ nullable: true })
  companyName: string;

  @Column()
  @Field({ nullable: true })
  summary: string;

  @Column()
  @Field({ nullable: true })
  established: Date;

  @Column()
  @Field({ nullable: true })
  openingHours: string;

  @Column()
  @Field({ nullable: true })
  comment: string;

  @Column()
  @Field({ nullable: true })
  firstName: string;

  @Column()
  @Field({ nullable: true })
  lastName: string;

  @Column()
  @Field({ nullable: true })
  @IsEmail()
  email: string;

  @Column()
  @Field({ nullable: true })
  phoneNumber: string;

  @Column()
  @Field({ nullable: true })
  streetName: string;

  @Column()
  @Field({ nullable: true })
  houseNumber: string;

  @Column()
  @Field({ nullable: true })
  city: string;

  @Column()
  @Field({ nullable: true })
  zipCode: string;

  @Column()
  @Field(() => [Int], { nullable: true })
  labelIds: number;

  @Column()
  @Field(() => [Int], { nullable: true })
  companyTypeIds: number;

  @Column()
  @Field(() => [Int], { nullable: true })
  sectorIds: number;

  @Column()
  @Field(() => [Int], { nullable: true })
  categoryIds: number;
}
