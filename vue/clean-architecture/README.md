```
src/
├── domains/
│   ├── hrs/
│   │   ├── application/        # 유스케이스 -> usecase
│   │   ├── composables/        # ViewModel
│   │   ├── components/         # 재사용 컴포넌트
│   │   ├── views/              # 페이지 단위 (라우팅 기준)
│   │   ├── domain/             # Entity, VO
│   │   ├── infrastructure/     # API, localStorage 등 외부
│   │   └── index.ts            # hrs 진입점
│   └── his/
│       ├── application/
│       ├── composables/
│       ├── components/
│       ├── views/
│       ├── domain/
│       ├── infrastructure/
│       └── index.ts
├── shared/
│   ├── components/             # 공통 UI 컴포넌트
│   ├── composables/            # 공통 hook (ex: useModal)
│   ├── utils/                  # 날짜, 포맷 등
│   └── constants/
├── router/
│   └── index.ts                # vue-router 정의
├── store/                      # pinia 혹은 상태 관리
└── main.ts
```

- presentation,infrastructure -> usecase -> entity 영역
- 헥사고날아키텍처 : adapter(어댑터, in,out) -> application(응용, port-in/out) -> domain(도메인)
- vue3에서는
  - 제어흐름
    - 제어흐름 in : page.vue(presentation) -> composable(ViewModel) -> usecase (in,out) -> entity(domain)
    - 제어흐름 out : api (infra) -> usecase -> (entity) -> composable -> page.vue(presentation)
- 의존방향
    ```
    제어흐름
    page.vue -> composable -> usecase in port -> 구현체 (서비스) -> entity
    page.vue <- composable <- usecase in port <- 구현체 (서비스) -> out port <- 구현체 (infra api)
    ```
  


```
개선1

src/
├── domains/
│   ├── user/
│   │   ├── application/            # 유저 유스케이스 (서비스 레이어)
│   │   │   └── userService.ts
│   │   ├── composable/             # 유저 ViewModel, 상태 (UI 상태, reactive)
│   │   │   └── useUserComposable.ts
│   │   └── model/                  # 유저 타입, 모델
│   │       └── User.ts
│
│   ├── order/
│   │   ├── application/
│   │   │   └── orderService.ts     # 오더 유스케이스에서 userService를 참조
│   │   ├── composable/
│   │   │   └── useOrderComposable.ts
│   │   └── model/
│   │       └── Order.ts
│
├── shared/
│   ├── infrastructure/            # API 호출, axios 등
│   ├── ui/                        # 공통 UI 컴포넌트 (Grid, Modal 등)
│   └── utils/                     # 공통 유틸리티
│
├── pages/
│   ├── order/
│   │   └── OrderPage.vue          # 실제 주문 페이지 (컴포저블 조합)
│   └── user/
│       └── UserPage.vue
```

```
개선2

pages/           # 라우트 페이지 전용
domains/         # 도메인별 계층
    ├── user/
    │   ├── composables/
    │   ├── usecase/
    │   ├── domain/
    │   ├── infrastructure/
    │   └── components/   # (Optional)
    ├── order/
    │   ├── composables/
    │   ├── usecase/
    │   ├── domain/
    │   ├── infrastructure/
    │   └── components/
common/          # 공통 컴포넌트 (버튼, 모달 등)
stores/          # Pinia, Vuex 등 글로벌 상태
utils/           # 공통 유틸 함수

```

```
개선3

domains/
 ├─ user/
 │   ├─ pages/
 │   ├─ composables/
 │   ├─ domain/
 │   ├─ application/
 │   ├─ infrastructure/
 │   ├─ components/
 ├─ order/
 │   ├─ pages/
 │   ├─ composables/
 │   ├─ domain/
 │   ├─ application/
 │   ├─ infrastructure/
 │   ├─ components/

```

| 구조                            | 의미                  |
| ----------------------------- | ------------------- |
| `domains/user`                | 사용자 도메인 경계          |
| `domains/user/pages`          | 사용자 전용 라우트          |
| `domains/user/components`     | 사용자 전용 공통 컴포넌트      |
| `domains/user/composables`    | 사용자 ViewModel       |
| `domains/user/application`    | 유스케이스, 서비스          |
| `domains/user/domain`         | Entity, ValueObject |
| `domains/user/infrastructure` | API, Adapter        |




```
현재 최종안

src/
 ├── domains/
 │   ├── sample/
 │   │   ├── modules/
 │   │   │   ├── user/
 │   │   │   ├── order/
 │   │   │   ├── user-refactoring/
 │   │   ├── stores/
 │   │   ├── utils/
 │   │   ├── components/
 │   │   ├── README.md
 
 
 
 
 domains/
 ├─ sample/
 │   ├─ components/               ✅ sample 전역 공통 UI
 │   ├─ modules/                  ✅ 업무 컨테이너
 │   │   ├─ order/
 │   │   ├─ user/
 │   │   ├─ user-refactoring/
 │   │   │   ├─ application/      ✅ 비즈니스 흐름 (유스케이스)
 │   │   │   ├─ composable/       ✅ ViewModel / 상태 관리
 │   │   │   ├─ domain/           ✅ Entity, VO
 │   │   │   ├─ infrastructure/   ✅ API Adapter
 │   │   │   ├─ page/             ✅ 라우트 Vue 파일
 │   │   │   │   ├─ components/   ✅ 페이지 전용 하위 컴포넌트
 │   │   │   │   └─ UserPageRefactoring.vue

```


| 폴더                   | 역할                                 |
| -------------------- | ---------------------------------- |
| `sample/modules/`    | 실제 업무 단위 (Bounded Context)         |
| `sample/stores/`     | sample 도메인 전체에서 공유하는 Pinia store 등 |
| `sample/utils/`      | sample 도메인 전체에서 공유하는 유틸            |
| `sample/components/` | sample 도메인 공통 UI 컴포넌트              |


| 구조 요소            | 실무 클린 아키텍처와 비교          |
| ---------------- | ----------------------- |
| `modules`        | ✔️ Bounded Context 컨테이너 |
| `application`    | ✔️ 유스케이스 + 서비스          |
| `domain`         | ✔️ Entity, VO           |
| `infrastructure` | ✔️ Adapter              |
| `page`           | ✔️ 라우트 단위, View         |
| `components`     | ✔️ 페이지 전용 혹은 도메인 전용 UI  |


composable vs composables
보통은 composables로 복수형을 많이 씀.
이유는 Composable은 Vue 관례상 Hooks 함수 모음이라서.
예: useUserComposable.ts, useOrderComposable.ts 등.

단, 당신은 계층 단일 역할에 집중한다면 단수형(composable)도 전혀 문제없음 — 더 '계층' 느낌이 강해집니다.

👉 둘 다 OK → 팀 컨벤션에 맞추면 됩니다!

✅ 전체 구조 매우 우수하고 표준 설계에 부합
✅ 단수형 계층 이름 → 추상화 계층 느낌이 강해져서 훨씬 명료
✅ modules로 하위 도메인 묶음 → 유지보수 최적



## 타입스크립트 config 옵션
| 옵션명                            | 설명                                       |
| ------------------------------ | ---------------------------------------- |
| `noImplicitAny`                | 암시적 any 사용 금지                            |
| `strictNullChecks`             | `null`과 `undefined`를 철저히 구분              |
| `strictFunctionTypes`          | 함수 타입 간 호환성 검사 강화                        |
| `strictBindCallApply`          | `bind`, `call`, `apply` 사용 시 인자 검사 강화    |
| `strictPropertyInitialization` | 클래스의 프로퍼티를 반드시 초기화하도록 강제                 |
| `noImplicitThis`               | `this`의 타입이 암시적일 경우 오류 발생                |
| `alwaysStrict`                 | 파일을 자동으로 strict mode(`"use strict"`)로 실행 |
