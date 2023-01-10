import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';

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

  @OneToOne(() => Company, { onDelete: 'CASCADE' })
  @Field(() => Company)
  company: Company;
}
