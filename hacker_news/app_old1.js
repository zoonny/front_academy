const ajax = new XMLHttpRequest();
const container = document.getElementById("root");
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();
console.log(ajax.response);

const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed);

// document.getElementById("root").innerHTML = 
// `<ul>
//     <li>${newsFeed[0].title}</li>
//     <li>${newsFeed[1].title}</li>
//     <li>${newsFeed[2].title}</li>
// </ul>`;

// # 해시변경이벤트
window.addEventListener("hashchange", function() {
    console.log("#해시변경");
    console.log(this.location.hash);
    const id = location.hash.substring(1);
    ajax.open('GET', CONTENT_URL.replace('@id', id), false)
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    console.log(newsContent);

    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;

    content.appendChild(title);
});

const ul = document.createElement('ul');
for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${newsFeed[i].id}`;
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`

    // a.addEventListener('click', function() {});

    li.appendChild(a);
    ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);