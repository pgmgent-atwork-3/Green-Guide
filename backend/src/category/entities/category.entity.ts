import { Sector } from './../../sector/entities/sector.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  sectorId: number;

  @ManyToOne(() => Sector, (sector) => sector.categories)
  @Field(() => Sector)
  sector: Sector;
}
