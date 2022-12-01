import { CreatePointInput } from './create-point.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePointInput extends PartialType(CreatePointInput) {
  @Field(() => Int)
  id: number;
}
