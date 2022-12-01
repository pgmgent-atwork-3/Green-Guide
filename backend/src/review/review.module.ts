import { User } from 'src/user/entities/user.entity';
import { Company } from 'src/company/entities/company.entity';
import { Review } from './entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Review]), User, Company],
  exports: [ReviewService],
  providers: [ReviewResolver, ReviewService],
})
export class ReviewModule {}
