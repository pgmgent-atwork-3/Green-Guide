import { InputType, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateLabelInput {
  @Column()
  @Field()
  name: string;
}
