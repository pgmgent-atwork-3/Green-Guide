import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CompanyLabel } from 'src/company-label/entities/company-label.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Label {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => CompanyLabel, (company) => company.label, {
    cascade: true,
  })
  @Field(() => [CompanyLabel])
  companies: CompanyLabel[];
}
