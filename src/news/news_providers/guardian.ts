import { ProviderDto } from '../dto/provider.dto';
import { Guardian, News } from '../interfaces /news.interface';

const url = 'https://content.guardianapis.com/search?&show-fields=byline';

function parser(res: Guardian): News[] {
  return res.response.results.map(gNew => {
    return {
      id: gNew.id,
      title: gNew.webTitle,
      author: gNew.fields.byline,
      publicationDate: gNew.webPublicationDate,
      webUrl: gNew.webUrl,
    };
  });
}

function buildUrl(search: string, apiKey: string): string {
  return url + `&api-key=${apiKey}&q=${search}`;
}

export const guardianProvider = new ProviderDto<Guardian>(
  url,
  parser,
  buildUrl,
);
