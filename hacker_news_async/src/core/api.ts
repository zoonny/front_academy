import { CONTENT_URL, NEWS_URL } from "../config";
import { NewsDetail, NewsFeed } from "../types";

class Api {
  xhr: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  protected requestWithXHR<AjaxResponse>(
    cb: (data: AjaxResponse) => void
  ): AjaxResponse {
    this.xhr.open("GET", this.url);
    this.xhr.addEventListener("load", () => {
      cb(JSON.parse(this.xhr.response) as AjaxResponse);
    });

    this.xhr.send();
  }

  protected requestWithPromise<AjaxResponse>(
    cb: (data: AjaxResponse) => void
  ): void {
    fetch(this.url)
      .then((response) => response.json())
      .then(cb)
      .catch(() => {
        console.log("데이터를 불러오지 못했습니다.");
      });
  }
}

export class NewsFeedApi extends Api {
  constructor(callback = undefined) {
    super(NEWS_URL);
  }

  getDataWithXHR(cb: (data: NewsFeed[]) => void): void {
    this.requestWithXHR<NewsFeed[]>(cb);
  }

  getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
    this.requestWithPromise<NewsFeed[]>(cb);
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));
  }

  getDataWithXHR(cb: (data: NewsDetail) => void): void {
    this.requestWithXHR<NewsDetail>(cb);
  }

  getDataWithPromise(cb: (data: NewsDetail) => void): void {
    this.requestWithPromise<NewsDetail>(cb);
  }
}
