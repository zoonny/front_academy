"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsDetailApi = exports.NewsFeedApi = void 0;
const config_1 = require("../config");
class Api {
    constructor(url) {
        this.xhr = new XMLHttpRequest();
        this.url = url;
    }
    requestWithXHR(cb) {
        this.xhr.open("GET", this.url);
        this.xhr.addEventListener("load", () => {
            cb(JSON.parse(this.xhr.response));
        });
        this.xhr.send();
    }
    requestWithPromise(cb) {
        fetch(this.url)
            .then((response) => response.json())
            .then(cb)
            .catch(() => {
            console.log("데이터를 불러오지 못했습니다.");
        });
    }
}
class NewsFeedApi extends Api {
    constructor(callback = undefined) {
        super(config_1.NEWS_URL);
    }
    getDataWithXHR(cb) {
        this.requestWithXHR(cb);
    }
    getDataWithPromise(cb) {
        this.requestWithPromise(cb);
    }
}
exports.NewsFeedApi = NewsFeedApi;
class NewsDetailApi extends Api {
    constructor(id) {
        super(config_1.CONTENT_URL.replace("@id", id));
    }
    getDataWithXHR(cb) {
        this.requestWithXHR(cb);
    }
    getDataWithPromise(cb) {
        this.requestWithPromise(cb);
    }
}
exports.NewsDetailApi = NewsDetailApi;
//# sourceMappingURL=api.js.map