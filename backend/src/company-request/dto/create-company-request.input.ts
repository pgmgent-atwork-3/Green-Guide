import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { AddCompanyLabelInput } from 'src/company-label/dto/add-company-label.input';
import { CompanyLabelInput } from 'src/company-label/interfaces/company-label-input.interface';
import { Column } from 'typeorm';

@InputType()
export class CreateCompanyRequestInput {
  @Column()
  @Field()
  companyName: string;

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
  @Field({ nullable: true })
  comment?: string;

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

  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field()
  houseNumber: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  zipCode: string;

  @Column()
  @Field(() => [AddCompanyLabelInput], { nullable: true })
  labels?: CompanyLabelInput[];

  @Column()
  @Field(() => [Int], { nullable: true })
  companyTypeIds?: number[];

  @Column()
  @Field(() => [Int], { nullable: true })
  sectorIds?: number[];

  @Column()
  @Field(() => [Int], { nullable: true })
  categoryIds?: number[];
}
