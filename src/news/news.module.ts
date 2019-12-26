import { Module, HttpModule } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleRepository } from './repositories/articles.repository';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [HttpModule, TypeOrmModule.forFeature([ArticleRepository])],
})
export class NewsModule {}
