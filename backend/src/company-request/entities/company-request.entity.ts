import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';
import { CompanyType } from 'src/company-type/entities/company-type.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
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

  @OneToMany(
    () => CompanyLabel,
    (companyLabel) => companyLabel.companyRequest,
    {
      cascade: true,
    },
  )
  @Field(() => [CompanyLabel], { nullable: true })
  labels: CompanyLabel[];

  @ManyToMany(() => CompanyType, { cascade: true })
  @JoinTable({ name: 'company_request_company_types' })
  @Field(() => [CompanyType])
  companyTypes: CompanyType[];

  @ManyToMany(() => Sector, { cascade: true })
  @JoinTable({ name: 'company_request_sectors' })
  @Field(() => [Sector])
  sectors: Sector[];

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable({ name: 'company_request_categories' })
  @Field(() => [Category])
  categories: Category[];
}
