import { CreateSectorInput } from './create-sector.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSectorInput extends PartialType(CreateSectorInput) {
  @Field(() => Int)
  id: number;
}
