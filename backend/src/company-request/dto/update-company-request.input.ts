import { CreateCompanyRequestInput } from './create-company-request.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { IsEmail } from 'class-validator';
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';
import { AddCompanyLabelInput } from 'src/company-label/dto/add-company-label.input';
import { CompanyLabelInput } from 'src/company-label/interfaces/company-label-input.interface';

@InputType()
export class UpdateCompanyRequestInput extends PartialType(
  CreateCompanyRequestInput,
) {
  @Column()
  @Field({ nullable: true })
  companyName?: string;

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
  @Field({ nullable: true })
  firstName?: string;

  @Column()
  @Field({ nullable: true })
  lastName?: string;

  @Column()
  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Column()
  @Field({ nullable: true })
  phoneNumber?: string;

  @Column()
  @Field({ nullable: true })
  streetName?: string;

  @Column()
  @Field({ nullable: true })
  houseNumber?: string;

  @Column()
  @Field({ nullable: true })
  city?: string;

  @Column()
  @Field({ nullable: true })
  zipCode?: string;

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
