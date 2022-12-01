import { Reward } from './../../reward/entities/reward.entity';
import { Point } from './../../point/entities/point.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
