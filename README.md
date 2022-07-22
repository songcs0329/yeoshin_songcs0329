# 패스트레인 프론트엔드 직군 사전 과제

## 디렉토리 구조

```bash
src
├── actions: 액션함수 모음
├── apis: db API fetcher
├── components: 컴포넌트 모음(styed-components)
│		├── CarDetail
│		└── NavDepSecond
├── reducers: 전역상태 리듀서 모음(redux)
├── styles: 전역 스타일 모음(GlobalStyles > styled-components)
├── types: index.d.ts 타입 정의
└── utils: 유틸함수 모음
```

## 요구사항 체크리스트

- [x] TypeScript 사용
- [x] 상태관리 라이브러리 사용(redux)
- [x] 깃허브 이슈 목록 리스트 불러오기
- [x] "comments" 많은 순으로 정렬
- [] 각 이슈 행에는 “이슈 번호”, “제목”, “작성일”, “코멘트 수”를 표시
- [x] 작성일은 YYYY-MM-DD hh:mm:ss 형식으로 표시

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
