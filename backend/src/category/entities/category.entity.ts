import { Sector } from './../../sector/entities/sector.entity';
import { Company } from 'src/company/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryColumn, Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Company, (company) => company.categories)
  @Field(() => [Company], { nullable: true })
  companies?: Company[];

  @ManyToOne(() => Sector, (sector) => sector.categories)
  @Field(() => Sector)
  sector?: Sector;
}
