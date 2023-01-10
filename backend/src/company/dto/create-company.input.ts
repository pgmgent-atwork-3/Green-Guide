import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateCompanyInput {
  @Column()
  @Field()
  name: string;

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
  @Field(() => Int)
  contactPersonId: number;

  @Column()
  @Field(() => Int)
  addressId: number;

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
