import { CreateSectorInput } from './create-sector.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateSectorInput extends PartialType(CreateSectorInput) {
  @Column()
  @Field({ nullable: true })
  name: string;
}
