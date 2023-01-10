import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Min } from 'class-validator';

@Entity()
@ObjectType()
export class Point {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  @Min(0)
  amount: number;

  @Column()
  @Field(() => Int)
  userId: number;

  @ManyToOne(() => User, (user) => user.points, {
    onDelete: 'CASCADE',
  })
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => Int)
  companyId: number;

  @ManyToOne(() => Company, (company) => company.points, {
    onDelete: 'CASCADE',
  })
  @Field(() => Company)
  company: Company;
}
