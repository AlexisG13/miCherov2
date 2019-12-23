import { NewsApi, News } from '../interfaces /news.interface';
import { ProviderDto } from '../dto/provider.dto';

const url = 'https://newsapi.org/v2/everything?';

function parser(res: NewsApi): News[] {
  return res.articles.map(art => {
    return {
      id: art.source.id,
      title: art.title,
      author: art.author,
      documentType: '',
      sectionName: '',
      publicationDate: art.publishedAt,
      webUrl: art.url,
    };
  });
}

export const newsApiProvider = new ProviderDto(url, parser);
