"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(containerId, template) {
        const containerElement = document.getElementById("root");
        if (!containerElement) {
            throw "최상위 컨테이너가 없어 UI를 진행하지 못합니다.";
        }
        this.container = containerElement;
        this.template = template;
        this.renderTemplate = template;
        this.htmlList = [];
    }
    updateView() {
        this.container.innerHTML = this.renderTemplate;
        // update 후 template 초기화
        this.renderTemplate = this.template;
    }
    addHtml(htmlString) {
        this.htmlList.push(htmlString);
    }
    getHtml() {
        const snapshot = this.htmlList.join("");
        this.clearHtmlList();
        return snapshot;
    }
    setTemplateData(key, value) {
        this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
    }
    clearHtmlList() {
        this.htmlList = [];
    }
}
exports.default = View;
//# sourceMappingURL=view.js.map