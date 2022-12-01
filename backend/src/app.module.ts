import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { CompanyModule } from './company/company.module';
import { CompanyRequestModule } from './company-request/company-request.module';
import { CompanyTypeModule } from './company-type/company-type.module';
import { ContactPersonModule } from './contact-person/contact-person.module';
import { ReviewModule } from './review/review.module';
import { SectorModule } from './sector/sector.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointModule } from './point/point.module';
import { RewardModule } from './reward/reward.module';

// TODO implement .env file
@Module({
  imports: [
    AddressModule,
    CategoryModule,
    CompanyModule,
    CompanyRequestModule,
    CompanyTypeModule,
    ContactPersonModule,
    ReviewModule,
    SectorModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (process.env.NODE_ENV === 'production') {
          return {
            url: process.env.DATABASE_URL,
            type: 'postgres',
            ssl: {
              rejectUnauthorized: false,
            },
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
          };
        } else {
          return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'server',
            password: 'secret123',
            database: 'green_guide',
            synchronize: true,
            entities: ['dist/**/*.entity{.ts,.js}'],
          };
        }
      },
    }),
    ReviewModule,
    SectorModule,
    CategoryModule,
    ContactPersonModule,
    AddressModule,
    PointModule,
    RewardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
