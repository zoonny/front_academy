import { CONTENT_URL, NEWS_URL } from "../config";
import { NewsDetail, NewsFeed } from "../types";

class Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  protected async request<AjaxResponse>(): Promise<AjaxResponse> {
    const response = await fetch(this.url);
    return await response.json() as AjaxResponse;
  }
}

export class NewsFeedApi extends Api {
  constructor(callback = undefined) {
    super(NEWS_URL);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.request<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));
  }

  async getData(): Promise<NewsDetail> {
    return this.request<NewsDetail>();
  }
}