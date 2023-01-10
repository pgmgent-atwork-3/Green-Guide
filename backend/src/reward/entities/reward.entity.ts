import { Company } from 'src/company/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Reward {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description: string;

  @Column()
  @Field(() => Int)
  @Min(0)
  points: number;

  @Column()
  @Field(() => Int)
  companyId: number;

  @ManyToOne(() => Company, (company) => company.rewards, {
    onDelete: 'CASCADE',
  })
  @Field(() => Company)
  company: Company;
}
