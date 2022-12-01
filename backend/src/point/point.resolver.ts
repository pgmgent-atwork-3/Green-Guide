import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PointService } from './point.service';
import { Point } from './entities/point.entity';
import { CreatePointInput } from './dto/create-point.input';
import { UpdatePointInput } from './dto/update-point.input';

@Resolver(() => Point)
export class PointResolver {
  constructor(private readonly pointService: PointService) {}

  @Mutation(() => Point)
  createPoint(@Args('createPointInput') createPointInput: CreatePointInput) {
    return this.pointService.create(createPointInput);
  }

  @Query(() => [Point], { name: 'point' })
  findAll() {
    return this.pointService.findAll();
  }

  @Query(() => Point, { name: 'point' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pointService.findOne(id);
  }

  @Mutation(() => Point)
  updatePoint(@Args('updatePointInput') updatePointInput: UpdatePointInput) {
    return this.pointService.update(updatePointInput.id, updatePointInput);
  }

  @Mutation(() => Point)
  removePoint(@Args('id', { type: () => Int }) id: number) {
    return this.pointService.remove(id);
  }
}
