import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Point {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  amount: number;

  @ManyToOne(() => User, (user) => user.points)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Company, (company) => company.points)
  @Field(() => Company)
  company: Company;
}
