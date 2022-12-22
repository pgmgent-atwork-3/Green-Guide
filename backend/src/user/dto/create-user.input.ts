import { InputType, Field, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Role } from 'src/role.enum';

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
    enum: Role,
  })
  @Field()
  role: string;

  @Column()
  @Field(() => Int, { nullable: true })
  companyId: number;
}
