import { CreateContactPersonInput } from './create-contact-person.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactPersonInput extends PartialType(CreateContactPersonInput) {
  @Field(() => Int)
  id: number;
}
