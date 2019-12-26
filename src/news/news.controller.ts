import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { Observable } from 'rxjs';
import { News } from './interfaces /news.interface';
import { NewsFilterDto } from './dto/get_news_filter.dto';
import { ValidationJWTGuard } from 'src/guards/validationjwt.guard';
import { InsertResult } from 'typeorm';
import { Article } from './entities/article.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @UseGuards(ValidationJWTGuard)
  saveNews(@Body('articleUrl') articleURl: string): Promise<Article> {
    return this.newsService.saveArticle(articleURl);
  }

  @Get()
  @UseGuards(ValidationJWTGuard)
  @UsePipes(ValidationPipe)
  getNews(@Query() newsFilterDto: NewsFilterDto): Observable<News[]> {
    return this.newsService.searchNews(newsFilterDto);
  }
}
