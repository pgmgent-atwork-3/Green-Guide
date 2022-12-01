import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

export enum role {
  USER = 'user',
  COMPANY = 'company',
  ADMIN = 'admin',
  SUPERADMIN = 'superAdmin',
}

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
    enum: role,
  })
  @Field()
  role: string;
}
