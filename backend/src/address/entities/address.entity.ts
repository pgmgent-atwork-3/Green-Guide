import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: true })
  streetName: string;

  @Column()
  @Field({ nullable: true })
  number: string;

  @Column()
  @Field({ nullable: true })
  city: string;

  @Column()
  @Field({ nullable: true })
  zipCode: string;

  @OneToOne(() => Company, { onDelete: 'CASCADE' })
  @Field(() => Company)
  company: Company;
}
