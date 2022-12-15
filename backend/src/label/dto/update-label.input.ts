import { CreateLabelInput } from './create-label.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateLabelInput extends PartialType(CreateLabelInput) {
  @Column()
  @Field()
  name: string;
}
