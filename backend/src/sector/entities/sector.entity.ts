import { Category } from './../../category/entities/category.entity';
import { Company } from 'src/company/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Sector {
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Company, (company) => company.sectors)
  @Field(() => [Company], { nullable: true })
  companies?: Company[];

  @OneToMany(() => Category, (category) => category.sector)
  @Field(() => [Category], { nullable: true })
  categories?: Category[];
}
