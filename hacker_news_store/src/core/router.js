"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    constructor() {
        window.addEventListener("hashchange", this.route.bind(this));
        this.routeTable = [];
        this.defaultRoute = null;
    }
    setDefaultPage(page) {
        this.defaultRoute = { path: "", page };
    }
    addRoutePath(path, page) {
        this.routeTable.push({ path, page });
    }
    route() {
        const routePath = location.hash;
        if (routePath === "" && this.defaultRoute) {
            this.defaultRoute.page.render();
        }
        for (const routeInfo of this.routeTable) {
            if (routePath.indexOf(routeInfo.path) >= 0) {
                routeInfo.page.render();
                break;
            }
        }
    }
}
exports.default = Router;
//# sourceMappingURL=router.js.map