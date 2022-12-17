import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';
import { Label } from './entities/label.entity';

@Injectable()
export class LabelService {
  constructor(
    @InjectRepository(Label)
    private labelRepository: Repository<Label>,
  ) {}

  create(createLabelInput: CreateLabelInput): Promise<Label> {
    const label = this.labelRepository.create(createLabelInput);
    return this.labelRepository.save(label);
  }

  findAll(): Promise<Label[]> {
    return this.labelRepository.find();
  }

  findOne(id: number): Promise<Label> {
    return this.labelRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateLabelInput: UpdateLabelInput,
  ): Promise<Label> | null {
    const label = await this.labelRepository.findOne({
      where: { id },
    });
    if (label) {
      this.labelRepository.merge(label, updateLabelInput);
      return this.labelRepository.save(label);
    }
    throw new Error('Label not found');
  }

  async remove(id: number): Promise<Label> | null {
    const label = await this.labelRepository.findOne({
      where: { id },
    });
    if (label) {
      return this.labelRepository.remove(label);
    }
    throw new Error('Label not found');
  }
}
