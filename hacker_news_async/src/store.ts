import { NewsFeed, NewsStore } from "./types";

export class Store implements NewsStore {
  private feeds: NewsFeed[];
  private _currentPage: number;
  private _lastPage: number;

  constructor() {
    this.feeds = [];
    this._currentPage = 1;
    this._lastPage = 0;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(page: number) {
    this._currentPage = page;
  }

  get nextPage(): number {
    return this._currentPage >= this._lastPage
      ? this._currentPage
      : this._currentPage + 1;
  }

  get prevPage(): number {
    return this.currentPage > 1 ? this._currentPage - 1 : 1;
  }

  get hasFeeds(): boolean {
    return this.feeds.length > 0;
  }

  get numberOfFeed(): number {
    return this.feeds.length;
  }

  set lastPage(page: number) {
    this._lastPage = page;
  }

  getAllFeeds(): NewsFeed[] {
    return this.feeds;
  }

  getFeed(position: number): NewsFeed {
    return this.feeds[position];
  }

  setFeeds(feeds: NewsFeed[]): void {
    this.feeds = feeds.map((feed) => ({
      ...feed,
      read: false,
    }));
    this._lastPage = Math.ceil(this.feeds.length / 10);
  }

  makeRead(id: number): void {
    const feed = this.feeds.find((feed: NewsFeed) => feed.id === id);

    if (feed) {
      feed.read = true;
    }
  }
}
