export interface News {
  id: string;
  title: string;
  author: string;
  publicationDate: Date | string;
  webUrl: string;
}

export interface NYTimes {
  response: {
    docs: [
      {
        headline: { main: string };
        byline: {
          original: string;
        };
        _id: string;
        pub_date: string;
        web_url: string;
      },
    ];
  };
}

export interface Guardian {
  response: {
    results: [
      {
        webTitle: string;
        id: string;
        webPublicationDate: string;
        webUrl: string;
        fields: {
          byline: string;
        };
      },
    ];
  };
}

export interface NewsApi {
  articles: [
    {
      source: {
        id: string;
      };
      title: string;
      author: string;
      publishedAt: string;
      url: string;
    },
  ];
}
