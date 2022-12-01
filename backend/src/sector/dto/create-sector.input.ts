import { InputType, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateSectorInput {
  @Column()
  @Field()
  name: string;
}
