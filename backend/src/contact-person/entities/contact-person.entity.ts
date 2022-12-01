import { Company } from 'src/company/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
@ObjectType()
export class ContactPerson {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

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

  @OneToOne(() => Company, (company) => company.contactPerson)
  @Field(() => Company)
  company?: Company;
}
