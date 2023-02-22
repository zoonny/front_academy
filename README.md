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

## 해커뉴스 클라이언트 - Typescript

- RestClient
- Type Alias & Interface
  - Intersection
    > type NewsFeed = News & { ... }
  - Type guard
    > getData(): NewsFeed[] | NewsDetail[]
  - Generic
    > getData<T>(): T
- Class & Mixin
  - Mixin 사용이유
    > applyApiMixins(NewsFeedApi, Api);
    - NewsFeedApi extends Api
    - 동적으로 클래스 상속, Not Type
    - 다중 상속이 가능
- View Class

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

### javascript 기본 문법

#### 변수

- 복사 : Primitive Type
- 참조 : 객체
- 구조 분석 할당

#### 타입

#### 함수

- 함수도 값, 변수 할당 가능
- 즉시 실행 함수
- 가변인자: arguments or ...args
- 함수실행
  - func();
  - func.call(context, 10, 20, 30);
  - func.apply(context, [10, 20, 30]);
