import { CreateAddressInput } from './create-address.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Column()
  @Field({ nullable: true })
  streetName: string;

  @Column()
  @Field({ nullable: true })
  number: string;

  @Column()
  @Field({ nullable: true })
  city: string;

  @Column()
  @Field({ nullable: true })
  zipCode: string;
}
