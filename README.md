# 패스트레인 프론트엔드 직군 사전 과제

## API 주소

https://api.github.com/repos/facebook/create-react-app/issues

## 외부 라이브러리(패키지) 사용

1. redux(redux-saga)

   ```
   리덕스는 리액트 생태계에서 가장 많이 사용하는 상태관리 라이브러리다.
   리덕스를 사용하면 여러 컴포넌트를 거쳐서 받아올 필요 없이 아무리 깊숙한 컴포넌트에 있다 하더라도 직속 부모에게서 받아오는 것 처럼 원하는 상태값을 골라서 편리하게 받아올 수 있습니다.
   리덕스 사가는 리덕스의 미들웨어입니다.
   데이터 패칭이나 비동기 동작을 더 쉽고 좋게 만드는 것을 목적하는 라이브러리입니다.
   리덕스 사가는 액션을 모니터링하고 있다가 특정 액션이 발생하게 되면 이에 따라 특정 작업을 하는 방식으로 동작합니다.
   ```

2. styled-components

   ```
   CSS in JS(JS안에 CSS를 작성하는 것) 관련 리액트 라이브러리 중 가장 인기 있는 라이브러리입니다.
   기존 돔을 만드는 방식인 css, scss 파일을 밖에 두고, 태그나 id, class이름으로 가져와 쓰지 않고, 동일한 컴포넌트에서 컴포넌트 이름을 쓰듯 스타일을 지정하는 것을 styled-components라고 부릅니다.
   css 파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, css가 전역으로 중첩되지 않도록 만들어주는 장점이 있습니다.
   ```

3. craco

   ```
   React에 Webpack 설정(config)을 덮어쓰기 위한 패키지입니다.
   이를 통해 프로젝트 내 각 역할 별 디렉토리를 절대 경로로 설정해두었습니다.
   ```

4. fontawesome

   ```
   폰트형태로 아이콘을 제공하는 패키지입니다.
   ```

## 디렉토리 구조

```bash
src
├── actions: 액션 함수 모음
├── apis: db API fetcher
├── components: 컴포넌트 모음(styed-components)
│		├── ErrorPage: 에러 메시지 표시
│		├── IssueItem: 이슈 개별 목록
│		├── IssuesList: 이슈 목록 리스트
│		└── Loading: 로딩 애니메이션
├── reducers: 전역상태 리듀서 모음(redux)
├── styles: 전역 스타일 모음(GlobalStyles > styled-components)
├── types: index.d.ts 타입 정의
└── utils: 유틸함수 모음
```

## 요구사항 체크리스트

- 리스트 목록

  - [x] 과제는 React로 작성 해 주세요.
  - [x] CRA, Next.js 사용 가능합니다. (CRA)
  - [x] TypeScript를 사용해주세요.
  - [x] 상태관리 라이브러리를 하나 이상 사용해주세요. (redux, redux-saga)
  - [x] 해당 API를 이용하여 깃허브 이슈 목록을 불러와주세요.
  - [x] 이슈 목록은 “comments”가 많은 순으로 정렬해주세요.
  - [x] 각 이슈 행에는 “이슈 번호”, “제목”, “작성일”, “코멘트 수”를 표시해 주세요.
  - [x] 작성일은 YYYY-MM-DD hh:mm:ss 형식으로 표시해 주세요.
  - [x] - 레이아웃 구성은 자유롭게, 본인의 역량을 최대한 나타낼 수 있도록 완성해주세요.

  ## History

- 22.07.22

  - [x] 과제 시작 첫 커밋
  - [x] 디렉토리 구조 설정
  - [x] 디렉토리 별 절대 경로 설정
  - [x] 전역 스타일 설정
  - [x] 이슈 타입 설정
  - [x] 이슈 목록 리스트 fetch API 추가
  - [x] redux store 설정
  - [x] redux sageMiddleWare 추가
  - [x] API 데이터 패칭을 위한 redux-saga 함수 추가
  - [x] 이슈 comments 순 정렬
  - [x] 날짜 포맷 유틸 함수 추가

- 22.07.23

  - [x] 전역 스타일 컬러 수정
  - [x] Loading, ErrorPage 컴포넌트 추가
  - [x] IssuesList, IssueItem 컴포넌트 추가
  - [x] fontawesome 패키지 추가(아이콘)
  - [x] Roboto 폰트 추가
  - [x] 액션 함수 타입 추가
  - [x] issues store state명 수정

  - 22.07.24

  - [x] 이슈 목록 리스트 id 항목 추가(고유키 값으로 사용)
  - [x] 이슈 목록 리스트 유저(user) 프로필 항목(login, avatar_url) 추가(유저 id, 아바타 이미지 표시)
  - [x] 이슈 목록 리스트 UI 추가 및 수정
  - [x] 전역 스타일 다크 모드 미디어 쿼리 추가
  - [x] Loading, ErrorPage 스타일 수정
  - [x] README 사용 라이브러리 관련 설명 추가
