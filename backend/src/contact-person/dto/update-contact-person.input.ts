import { CreateContactPersonInput } from './create-contact-person.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateContactPersonInput extends PartialType(
  CreateContactPersonInput,
) {
  @Column()
  @Field({ nullable: true })
  firstName?: string;

  @Column()
  @Field({ nullable: true })
  lastName?: string;

  @Column()
  @Field({ nullable: true })
  email?: string;

  @Column()
  @Field({ nullable: true })
  phoneNumber?: string;
}
