import { InputType, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { role } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Column()
  @Field()
  userName: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({
    default: 'user',
    type: 'enum',
    enum: role,
  })
  @Field()
  role: string;
}
