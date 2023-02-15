import { CONTENT_URL, NEWS_URL } from "../config";
import { NewsDetail, NewsFeed } from "../types";

class Api {
  ajax: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  protected getRequest<AjaxResponse>(): AjaxResponse {
    this.ajax.open("GET", this.url, false);
    this.ajax.send();

    return JSON.parse(this.ajax.response);
  }
}

export class NewsFeedApi extends Api {
  constructor() {
    super(NEWS_URL);
  }

  getData(): NewsFeed[] {
    return this.getRequest<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));
  }

  getData(): NewsDetail {
    return this.getRequest<NewsDetail>();
  }
}