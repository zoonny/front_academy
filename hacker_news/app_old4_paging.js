const ajax = new XMLHttpRequest();
const container = document.getElementById("root");
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

const store = {
    currentPage: 1,
    lastPage: 0,
    isLastPage: function() {
        return this.currentPage >= this.lastPage;
    }
}

function getData(url) {
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response);
}

function newsFeed() {
    const newsFeed = getData(NEWS_URL);
    const newsList = [];

    store.lastPage = Math.ceil(newsFeed.length / 10);
    console.log(store.lastPage);

    newsList.push(`<ul>`);

    for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
        newsList.push(`
        <li>
            <a href="#/show/${newsFeed[i].id}">
            ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
        `);
    }
    newsList.push(`</ul>`);
    newsList.push(`
        <div>
            <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
            <a href="#/page/${!store.isLastPage() ? store.currentPage + 1 : store.lastPage}">다음 페이지</a>
        </div>
    `)

    container.innerHTML = newsList.join('');
}

function newsDetail() {
    const id = location.hash.substring(7);
    const newsContent = getData(CONTENT_URL.replace('@id', id));

    const title = document.createElement('h1');

    container.innerHTML = `
      <h1>${newsContent.title}</h1>

      <div>
        <a href="#/page/${store.currentPage}">목록으로</a>
      </div>
    `;
}

function router() {
    // #만 있는 경우 location.hash는 빈문자열 리턴
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed();
    } else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = Number(routePath.substring(7));
        newsFeed();
    } else {
        newsDetail();
    }
}

window.addEventListener("hashchange", router);

router();