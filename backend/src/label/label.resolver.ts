import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from './entities/label.entity';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';

@Resolver(() => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Mutation(() => Label)
  createLabel(
    @Args('createLabelInput') createLabelInput: CreateLabelInput,
  ): Promise<Label> {
    return this.labelService.create(createLabelInput);
  }

  @Query(() => [Label], { name: 'labels' })
  findAll(): Promise<Label[]> {
    return this.labelService.findAll();
  }

  @Query(() => Label, { name: 'label' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Label> {
    return this.labelService.findOne(id);
  }

  @Mutation(() => Label)
  updateLabel(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateLabelInput') updateLabelInput: UpdateLabelInput,
  ): Promise<Label> {
    return this.labelService.update(id, updateLabelInput);
  }

  @Mutation(() => Label)
  removeLabel(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Label> | null {
    return this.labelService.remove(id);
  }
}
