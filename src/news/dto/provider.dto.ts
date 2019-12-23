import { News } from '../interfaces /news.interface';

type parserType<T> = (res: T) => News[];
type buildUrlType = (search: string, apiKey: string) => string;

export class ProviderDto<T> {
  apiKey: string;
  url: string;
  parser: parserType<T>;
  buidUrl: buildUrlType;
  constructor(url: string, parser: parserType<T>, buildUrl: buildUrlType) {
    this.apiKey = '';
    this.url = url;
    this.parser = parser;
    this.buidUrl = buildUrl;
  }

  init(apiKey: string | undefined): ProviderDto<T> {
    this.apiKey = apiKey ? apiKey : '';
    return this;
  }
}
