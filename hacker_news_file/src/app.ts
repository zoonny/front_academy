import Router from "./core/router";
import { NewsDetailView, NewsFeedView } from "./page";
import { Store } from "./types";

const store: Store = {
  currentPage: 1,
  lastPage: 0,
  isLastPage: function (): boolean {
    return this.currentPage >= this.lastPage;
  },
  feeds: [],
};

declare global {
  interface Window {
    store: Store;
  }
}

window.store = store;

const router: Router = new Router();
const newsFeedView = new NewsFeedView("root");
const newsDetailView = new NewsDetailView("root");

router.setDefaultPage(newsFeedView);

router.addRoutePath("/page/", newsFeedView);
router.addRoutePath("/show/", newsDetailView);

router.route();
