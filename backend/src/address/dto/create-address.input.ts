import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateAddressInput {
  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field()
  Number: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  zipCode: string;
}
