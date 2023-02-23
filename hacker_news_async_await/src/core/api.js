"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsDetailApi = exports.NewsFeedApi = void 0;
const config_1 = require("../config");
class Api {
    constructor(url) {
        this.url = url;
    }
    request() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.url);
            return yield response.json();
        });
    }
}
class NewsFeedApi extends Api {
    constructor(callback = undefined) {
        super(config_1.NEWS_URL);
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request();
        });
    }
}
exports.NewsFeedApi = NewsFeedApi;
class NewsDetailApi extends Api {
    constructor(id) {
        super(config_1.CONTENT_URL.replace("@id", id));
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request();
        });
    }
}
exports.NewsDetailApi = NewsDetailApi;
//# sourceMappingURL=api.js.map