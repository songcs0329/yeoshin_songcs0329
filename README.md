# 패스트레인 프론트엔드 직군 사전 과제

## API 주소

https://api.github.com/repos/facebook/create-react-app/issues

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
  - [x] 디렉토리 별 절대경로 설정
  - [x] 전역 스타일 설정
  - [x] 이슈 타입 설정
  - [x] 이슈 목록 리스트 fetch API 추가
  - [x] redux store 설정
  - [x] redux sageMiddleWare 추가
  - [x] API 데이터 패칭을 위한 redux-saga 함수 추가
  - [x] 이슈 comments 순 정렬
  - [x] 날짜 포멧 유틸함수 추가

- 22.07.23

  - [x] 전역 스타일 컬러 수정
  - [x] Loading, ErrorPage 컴포넌트 추가
  - [x] IssuesList, IssueItem 컴포넌트 추가
  - [x] fontawesome 패키지 추가(아이콘)
  - [x] Roboto 폰트 추가
  - [x] 액션 함수 타입 추가
  - [x] issues store state명 수정
