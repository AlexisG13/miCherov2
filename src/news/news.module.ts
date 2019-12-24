import { Module, HttpModule } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Article } from './entities/article.entity';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [HttpModule,TypeOrmModule.forFeature([Article])],
})

export class NewsModule {}
