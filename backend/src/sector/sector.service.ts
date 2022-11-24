import { Injectable } from '@nestjs/common';
import { CreateSectorInput } from './dto/create-sector.input';
import { UpdateSectorInput } from './dto/update-sector.input';

@Injectable()
export class SectorService {
  create(createSectorInput: CreateSectorInput) {
    return 'This action adds a new sector';
  }

  findAll() {
    return `This action returns all sector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sector`;
  }

  update(id: number, updateSectorInput: UpdateSectorInput) {
    return `This action updates a #${id} sector`;
  }

  remove(id: number) {
    return `This action removes a #${id} sector`;
  }
}
