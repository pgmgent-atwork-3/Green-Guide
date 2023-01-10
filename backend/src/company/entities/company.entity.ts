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
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';

@Entity()
@ObjectType()
export class Company {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  established: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  openingHours: string;

  @Column()
  @Field(() => Int)
  contactPersonId: number;

  @OneToOne(() => ContactPerson, { cascade: true })
  @Field(() => ContactPerson)
  @JoinColumn()
  contactPerson: ContactPerson;

  @Column()
  @Field(() => Int)
  addressId: number;

  @OneToOne(() => Address, { cascade: true })
  @Field(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => CompanyLabel, (label) => label.company, { cascade: true })
  @Field(() => [CompanyLabel])
  labels: CompanyLabel[];

  @ManyToMany(() => CompanyType, { cascade: true })
  @JoinTable({ name: 'company_company_type' })
  @Field(() => [CompanyType])
  companyTypes: CompanyType[];

  @ManyToMany(() => Sector, { cascade: true })
  @Field(() => [Sector])
  @JoinTable({ name: 'company_sector' })
  sectors: Sector[];

  @ManyToMany(() => Category, { cascade: true })
  @Field(() => [Category])
  @JoinTable({ name: 'company_category' })
  categories: Category[];

  @OneToMany(() => Point, (point) => point.company, { cascade: true })
  @Field(() => [Point])
  points: Point[];

  @OneToMany(() => Reward, (reward) => reward.company, { cascade: true })
  @Field(() => [Reward])
  rewards: Reward[];

  @OneToMany(() => Review, (review) => review.company, { cascade: true })
  @Field(() => [Review])
  reviews: Review[];
}
