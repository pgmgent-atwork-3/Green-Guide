import { Category } from './../../category/entities/category.entity';
import { Sector } from './../../sector/entities/sector.entity';
import { ContactPerson } from './../../contact-person/entities/contact-person.entity';
import { CompanyType } from './../../company-type/entities/company-type.entity';
import { Review } from './../../review/entities/review.entity';
import { Reward } from './../../reward/entities/reward.entity';
import { Point } from './../../point/entities/point.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { CompanyRequest } from 'src/company-request/entities/company-request.entity';

@Entity()
@ObjectType()
export class Company {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  btwNumber: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  summary: string;

  @Column()
  @Field()
  established: Date;

  @Column()
  @Field()
  openingHours: string;

  @OneToMany(() => Point, (point) => point.company)
  @Field(() => [Point], { nullable: true })
  points: Point[];

  @OneToMany(() => Reward, (reward) => reward.company)
  @Field(() => [Reward], { nullable: true })
  rewards: Reward[];

  @OneToMany(() => Review, (review) => review.company)
  @Field(() => [Review], { nullable: true })
  reviews: Review[];

  @ManyToMany(() => CompanyType)
  @Field(() => [CompanyType], { nullable: true })
  companyTypes: CompanyType[];

  @OneToOne(() => ContactPerson)
  @Field(() => ContactPerson)
  @JoinColumn()
  contactPerson: ContactPerson;

  @OneToOne(() => Address)
  @Field(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToMany(() => Sector)
  @Field(() => [Sector])
  @JoinTable()
  sectors: Sector[];

  @ManyToMany(() => Category)
  @Field(() => [Category])
  @JoinTable()
  categories: Category[];

  @OneToOne(() => CompanyRequest)
  @Field(() => CompanyRequest)
  @JoinColumn()
  companyRequest: CompanyRequest;
}
