# 김민태의 프론트엔드 아카데미 1강

## 시작하며

### 강의환경
- chrome
- vscode
- vscode extension
  - debugger for chrome
- nodejs
- parcel-bundler
> npm install -g parcel-bundler
- typescript
> npm install -g typescript

## 해커뉴스 클라이언트
- hcker news api
> https://github.com/HackerNews/API
- tailwindcss
- edit as html

```shell
$ parcel index.html
```

- dom api로 복잡한 화면 개발 시, UI 구조가 잘 드러나지 않음
- 문자열만 가지고 UI를 만든다.
- Template replace library
  - Handlebars

## 해커뉴스 클라이언트
- RestClient
- Type Alias
  - Intersection
  > type NewsFeed = News & { ... }
- Type guard
> getData(): NewsFeed[] | NewsDetail[]
- Generic
> getData<T>(): T

- ViewClass
- Split class file
- Global Store
  - window global variable
  - Store class
- Async
  - Callback
  - Promise
  - async await

## 실용튜토리얼

### 차트라이브러리

- jsdoc

```shell
$ jsdoc chart.js
$ cd out
$ https-server -p 3000
```