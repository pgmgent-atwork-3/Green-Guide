import { Review } from './../../review/entities/review.entity';
import { Point } from './../../point/entities/point.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { Company } from 'src/company/entities/company.entity';
import { Role } from 'src/role.enum';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  @MaxLength(20)
  userName: string;

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
  @MinLength(8)
  password: string;
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column({
    default: 'user',
    type: 'enum',
    enum: Role,
  })
  @Field()
  role: string;

  @OneToOne(() => Company)
  @Field(() => Company)
  @JoinColumn()
  company: Company;

  @OneToMany(() => Point, (point) => point.user)
  @Field(() => [Point])
  points: Point[];

  @OneToMany(() => Review, (review) => review.user)
  @Field(() => [Review])
  reviews: Review[];
}
