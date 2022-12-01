import { Injectable } from '@nestjs/common';
import { CreateRewardInput } from './dto/create-reward.input';
import { UpdateRewardInput } from './dto/update-reward.input';

@Injectable()
export class RewardService {
  create(createRewardInput: CreateRewardInput) {
    return 'This action adds a new reward';
  }

  findAll() {
    return `This action returns all reward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reward`;
  }

  update(id: number, updateRewardInput: UpdateRewardInput) {
    return `This action updates a #${id} reward`;
  }

  remove(id: number) {
    return `This action removes a #${id} reward`;
  }
}
