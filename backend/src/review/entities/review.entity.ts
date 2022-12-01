import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  content: string;

  @Column()
  @Field()
  @Min(1)
  @Max(5)
  rating: number;

  @ManyToOne(() => User, (user) => user.reviews)
  @Field(() => User)
  user?: User;

  @ManyToOne(() => Company, (company) => company.reviews)
  @Field(() => Company)
  company?: Company;
}
