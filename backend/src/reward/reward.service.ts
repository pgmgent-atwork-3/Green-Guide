import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { forwardRef } from '@nestjs/common/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateRewardInput } from './dto/create-reward.input';
import { UpdateRewardInput } from './dto/update-reward.input';
import { Reward } from './entities/reward.entity';

@Injectable()
export class RewardService {
  constructor(
    @InjectRepository(Reward)
    private rewardRepository: Repository<Reward>,
    @Inject(forwardRef(() => CompanyService))
    private companyService: CompanyService,
  ) {}

  create(createRewardInput: CreateRewardInput): Promise<Reward> {
    const reward = this.rewardRepository.create(createRewardInput);
    return this.rewardRepository.save(reward);
  }

  findAll(): Promise<Reward[]> {
    return this.rewardRepository.find();
  }

  findOne(id: number): Promise<Reward> {
    return this.rewardRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateRewardInput: UpdateRewardInput,
  ): Promise<Reward> | null {
    const reward = await this.rewardRepository.findOne({
      where: { id },
    });
    if (reward) {
      this.rewardRepository.merge(reward, updateRewardInput);
      return this.rewardRepository.save(reward);
    }
    throw new Error('Reward not found');
  }

  async remove(id: number): Promise<Reward> | null {
    const reward = await this.rewardRepository.findOne({
      where: { id },
    });
    if (reward) {
      return this.rewardRepository.remove(reward);
    }
    throw new Error('Reward not found');
  }

  getCompany(companyId: number): Promise<Company> {
    return this.companyService.findOne(companyId);
  }
}
