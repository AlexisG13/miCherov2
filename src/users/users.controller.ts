import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Get,
  ParseIntPipe,
  Param,
  UnauthorizedException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { UsersService } from './users.service';
import { AccessToken } from './dto/access-token.dto';
import { Article } from 'src/news/entities/article.entity';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/users.entity';
import { GetUser } from './decorators/get-user.decorator';
import { ArticleDto } from './dto/article.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() authcredentialsDTo: AuthCredentialsDto): Promise<void> {
    return this.usersService.signUp(authcredentialsDTo);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  signIn(@Body() authcredentialsDTo: AuthCredentialsDto): Promise<AccessToken> {
    return this.usersService.login(authcredentialsDTo);
  }

  @Post('/:userId/articles')
  @UseGuards(AuthGuard())
  @UseInterceptors(ClassSerializerInterceptor)
  @UsePipes(ValidationPipe)
  saveArticle(
    @Body() article: ArticleDto,
    @Param('userId', ParseIntPipe) userId: number,
    @GetUser() user: User,
  ): Promise<Article> {
    if (user.id !== userId) {
      throw new UnauthorizedException('Unathorized userId in request');
    }
    return this.usersService.saveArticle(user, article.articleUrl);
  }

  @Get('/:userId/articles')
  @UseGuards(AuthGuard())
  getArticles(
    @GetUser() user: User,
    @Param('userId', ParseIntPipe) userId: number,
  ): Article[] {
    if (user.id !== userId) {
      throw new UnauthorizedException('Unauthorized userId in request');
    }
    return user.articles;
  }
}
