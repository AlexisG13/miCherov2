import { EntityRepository, Repository } from 'typeorm';
import { Article } from '../entities/article.entity';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  async saveArticle(articleUrl: string): Promise<Article> {
    const newArticle = new Article(articleUrl);
    await newArticle.save();
    return newArticle;
  }
}
