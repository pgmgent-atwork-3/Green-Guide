import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Role } from 'src/role.enum';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Column()
  @Field({ nullable: true })
  userName: string;

  @Column()
  @Field({ nullable: true })
  firstName: string;

  @Column()
  @Field({ nullable: true })
  lastName: string;

  @Column()
  @Field({ nullable: true })
  email: string;

  @Column()
  @Field({ nullable: true })
  password: string;

  @Column({
    default: 'user',
    type: 'enum',
    enum: Role,
  })
  @Field({ nullable: true })
  role: string;
}
