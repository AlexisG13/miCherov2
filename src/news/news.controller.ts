import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Post,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { Observable } from 'rxjs';
import { News } from './interfaces /news.interface';
import { NewsFilterDto } from './dto/get_news_filter.dto';
import { ValidationJWTGuard } from 'src/guards/validationjwt.guard';
import { InsertResult } from 'typeorm';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  saveNews(): Promise<InsertResult> {
    return this.newsService.addArticle();
  }

  @Get()
  @UseGuards(ValidationJWTGuard)
  @UsePipes(ValidationPipe)
  getNews(@Query() newsFilterDto: NewsFilterDto): Observable<News[]> {
    return this.newsService.searchNews(newsFilterDto);
  }
}
