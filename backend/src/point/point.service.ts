import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { forwardRef } from '@nestjs/common/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreatePointInput } from './dto/create-point.input';
import { UpdatePointInput } from './dto/update-point.input';
import { Point } from './entities/point.entity';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(Point)
    private pointRepository: Repository<Point>,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    @Inject(forwardRef(() => CompanyService))
    private companyService: CompanyService,
  ) {}

  create(createPointInput: CreatePointInput): Promise<Point> {
    return this.pointRepository.save(createPointInput);
  }

  findAll(): Promise<Point[]> {
    return this.pointRepository.find();
  }

  findOne(id: number): Promise<Point> {
    return this.pointRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updatePointInput: UpdatePointInput,
  ): Promise<Point> | null {
    const point = await this.pointRepository.findOne({ where: { id } });
    if (point) {
      return this.pointRepository.merge(point, updatePointInput);
    }
    throw new Error('Point not found');
  }

  async remove(id: number): Promise<Point> | null {
    const point = await this.pointRepository.findOne({ where: { id } });
    if (point) {
      return this.pointRepository.remove(point);
    }
    throw new Error('Point not found');
  }

  getUser(id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  getCompany(id: number): Promise<Company> {
    return this.companyService.findOne(id);
  }
}
