import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Label } from 'src/label/entities/label.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class CompanyRequest {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  approved: boolean;

  @Column()
  @Field()
  companyName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  established: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  openingHours: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  comment: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  @IsEmail()
  email: string;

  @Column()
  @Field()
  phoneNumber: string;

  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field()
  houseNumber: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  zipCode: string;

  @ManyToMany(() => Label, { cascade: true })
  @JoinTable({ name: 'company_request_labels' })
  @Field(() => [Label], { nullable: true })
  labels: Label[];

  @ManyToMany(() => CompanyType, { cascade: true })
  @JoinTable({ name: 'company_request_company_types' })
  @Field(() => [CompanyType], { nullable: true })
  companyTypes: CompanyType[];

  @ManyToMany(() => Sector, { cascade: true })
  @JoinTable({ name: 'company_request_sectors' })
  @Field(() => [Sector], { nullable: true })
  sectors: Sector[];

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable({ name: 'company_request_categories' })
  @Field(() => [Category], { nullable: true })
  categories: Category[];
}
