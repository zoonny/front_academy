"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsDetailApi = exports.NewsFeedApi = void 0;
const config_1 = require("../config");
class Api {
    constructor(url) {
        this.ajax = new XMLHttpRequest();
        this.url = url;
    }
    getRequest() {
        this.ajax.open("GET", this.url, false);
        this.ajax.send();
        return JSON.parse(this.ajax.response);
    }
}
class NewsFeedApi extends Api {
    constructor(callback = undefined) {
        super(config_1.NEWS_URL);
    }
    getData() {
        return this.getRequest();
    }
}
exports.NewsFeedApi = NewsFeedApi;
class NewsDetailApi extends Api {
    constructor(id) {
        super(config_1.CONTENT_URL.replace("@id", id));
    }
    getData() {
        return this.getRequest();
    }
}
exports.NewsDetailApi = NewsDetailApi;
//# sourceMappingURL=api.js.map