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