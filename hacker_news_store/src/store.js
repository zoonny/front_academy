"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor() {
        this.feeds = [];
        this._currentPage = 1;
        this._lastPage = 0;
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(page) {
        this._currentPage = page;
    }
    get nextPage() {
        return this._currentPage >= this._lastPage
            ? this._currentPage
            : this._currentPage + 1;
    }
    get prevPage() {
        return this.currentPage > 1 ? this._currentPage - 1 : 1;
    }
    get hasFeeds() {
        return this.feeds.length > 0;
    }
    get numberOfFeed() {
        return this.feeds.length;
    }
    set lastPage(page) {
        this._lastPage = page;
    }
    getAllFeeds() {
        return this.feeds;
    }
    getFeed(position) {
        return this.feeds[position];
    }
    setFeeds(feeds) {
        this.feeds = feeds.map((feed) => (Object.assign(Object.assign({}, feed), { read: false })));
        this._lastPage = Math.ceil(this.feeds.length / 10);
    }
    makeRead(id) {
        const feed = this.feeds.find((feed) => feed.id === id);
        if (feed) {
            feed.read = true;
        }
    }
}
exports.Store = Store;
//# sourceMappingURL=store.js.map