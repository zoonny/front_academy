"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./core/router"));
const page_1 = require("./page");
const store = {
    currentPage: 1,
    lastPage: 0,
    isLastPage: function () {
        return this.currentPage >= this.lastPage;
    },
    feeds: [],
};
window.store = store;
const router = new router_1.default();
const newsFeedView = new page_1.NewsFeedView("root");
const newsDetailView = new page_1.NewsDetailView("root");
router.setDefaultPage(newsFeedView);
router.addRoutePath("/page/", newsFeedView);
router.addRoutePath("/show/", newsDetailView);
router.route();
//# sourceMappingURL=app.js.map