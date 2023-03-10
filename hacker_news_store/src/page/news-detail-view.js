"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = __importDefault(require("../core/view"));
const api_1 = require("../core/api");
const template = `
  <div class="bg-gray-600 min-h-screen pb-8">
    <div class="bg-white text-xl">
      <div class="mx-auto px-4">
        <div class="flex justify-between items-center py-6">
          <div class="flex justify-start">
            <h1 class="font-extrabold">Hacker News</h1>
          </div>
          <div class="items-center justify-end">
            <a href="#/page/{{__currentPage__}}" class="text-gray-500">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="h-full border rounded-xl bg-white m-6 p-4 ">
      <h2>{{__title__}}</h2>
      <div class="text-gray-400 h-20">
        {{__content__}}
      </div>
      {{__comments__}}
    </div>
  </div>
`;
class NewsDetailView extends view_1.default {
    constructor(containerId, store) {
        super(containerId, template);
        this.render = () => {
            const id = location.hash.substring(7);
            const api = new api_1.NewsDetailApi(id);
            this.store.makeRead(Number(id));
            const newsDetail = api.getData();
            this.setTemplateData('currentPage', String(this.store.currentPage));
            this.setTemplateData('title', newsDetail.title);
            this.setTemplateData('content', newsDetail.content);
            this.setTemplateData('comments', this.makeComment(newsDetail.comments));
            this.updateView();
        };
        this.store = store;
    }
    makeComment(comments) {
        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];
            this.addHtml(`
        <div style="padding-left: ${comment.level * 40}px;" class="mt-4">
          <div class="text-gray-400">
            <i class="fa fa-sort-up mr-2"></i>
            <strong>${comment.user}</strong> ${comment.time_ago}
          </div>
          <p class="text-gray-700">${comment.content}</p>
        </div>      
      `);
            if (comment.comments.length > 0) {
                this.addHtml(this.makeComment(comment.comments));
            }
        }
        return this.getHtml();
    }
}
exports.default = NewsDetailView;
//# sourceMappingURL=news-detail-view.js.map