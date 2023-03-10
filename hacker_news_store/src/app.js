"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./core/router"));
const page_1 = require("./page");
const store_1 = require("./store");
const store = new store_1.Store();
const router = new router_1.default();
const newsFeedView = new page_1.NewsFeedView("root", store);
const newsDetailView = new page_1.NewsDetailView("root", store);
router.setDefaultPage(newsFeedView);
router.addRoutePath("/page/", newsFeedView);
router.addRoutePath("/show/", newsDetailView);
router.route();
//# sourceMappingURL=app.js.map