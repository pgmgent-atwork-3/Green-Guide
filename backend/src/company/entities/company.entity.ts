import { Category } from './../../category/entities/category.entity';
import { Sector } from './../../sector/entities/sector.entity';
import { ContactPerson } from './../../contact-person/entities/contact-person.entity';
import { CompanyType } from './../../company-type/entities/company-type.entity';
import { Review } from './../../review/entities/review.entity';
import { Reward } from './../../reward/entities/reward.entity';
import { Point } from './../../point/entities/point.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from 'src/address/entities/address.entity';

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

  @OneToOne(() => User, (user) => user.company)
  @Field(() => User)
  @JoinColumn()
  user?: User;

  @OneToMany(() => Point, (point) => point.company)
  @Field(() => [Point])
  points?: Point[];

  @OneToMany(() => Reward, (reward) => reward.company)
  @Field(() => [Reward])
  rewards?: Reward[];

  @OneToMany(() => Review, (review) => review.company)
  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @ManyToMany(() => CompanyType, (companyType) => companyType.companies)
  @Field(() => [CompanyType])
  companyTypes?: CompanyType[];

  @OneToOne(() => ContactPerson, (contactPerson) => contactPerson.company)
  @Field(() => ContactPerson)
  contactPerson?: ContactPerson;

  @OneToOne(() => Address, (address) => address.company)
  @Field(() => Address)
  address?: Address;

  @ManyToMany(() => Sector, (sector) => sector.companies)
  @Field(() => [Sector])
  sectors?: Sector[];

  @ManyToMany(() => Category, (category) => category.companies)
  @Field(() => [Category])
  categories?: Category[];
}
