import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CompanyRequest } from 'src/company-request/entities/company-request.entity';
import { Company } from 'src/company/entities/company.entity';
import { Label } from 'src/label/entities/label.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CompanyLabel {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  companyId?: number;

  @ManyToOne(() => Company, (company) => company.labels, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @Field(() => Company, { nullable: true })
  company?: Company;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  companyRequestId?: number;

  @ManyToOne(() => CompanyRequest, (companyRequest) => companyRequest.labels, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @Field(() => CompanyRequest, { nullable: true })
  companyRequest?: CompanyRequest;

  @Column()
  @Field(() => Int)
  labelId: number;

  @ManyToOne(() => Label, (label) => label.companies, {
    onDelete: 'CASCADE',
  })
  @Field(() => Label)
  label: Label;

  @Column()
  @Field()
  motivation: string;

  @Column()
  @Field()
  approved: boolean;
}
