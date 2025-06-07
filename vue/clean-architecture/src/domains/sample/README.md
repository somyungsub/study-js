## 의존성방향
- infrastructure → composables → usecase → domain


## 폴더 구조 및 역할
| 폴더                    | 설명                            | 평가                       |
| --------------------- | ----------------------------- | ------------------------ |
| `components/`         | Dumb UI 컴포넌트 (뷰 역할만)          | ✅ View 분리 잘됨             |
| `composables/`        | 상태 + 유스케이스 바인딩 (ViewModel 계층) | ✅ 명확한 역할                 |
| `domain/`             | Entity, VO, Enum 등 순수 모델링     | ✅ 변경 최소화 계층              |
| `infrastructure/api/` | 외부 API 호출 역할                  | ✅ Adapter(OutPort) 역할 충실 |
| `usecase/`            | 유스케이스 인터페이스 및 구현              | ✅ 핵심 규칙을 여기에 구현          |
| `usecase/**/service/` | 실제 구현체                        | ✅ SRP에 맞게 폴더 분리          |
| `.vue` 상위에 위치         | Feature View 역할               | ✅ 컴포지션/의존 관계 명확          |


## 전체 폴더 구조
```
user-refactoring/
├── UserPageRefactoring.vue        # 페이지 최상위 진입점 (Feature View)
│
├── components/                    # 하위 컴포넌트 (View 전용) + 재사용 영역
│   ├── UserList.vue
│   └── EventHistoryList.vue
│
├── composables/                   # ViewModel 계층 (Composable + 상태 조작)
│   ├── useUser.ts
│   ├── useEventHistory.ts
│   └── useUserPage.ts
│
├── domain/                        # 도메인 모델 (Entity, VO, Enum 등)
│   ├── constant/                  # 상수, 타입, Enum 등
│   │   └── userTypes.ts
│   ├── entity/
│   │   ├── User.ts
│   │   └── UserEventHistory.ts
│   └── vo/                        # Value Object (필요 시)
│       └── ...
│
├── infrastructure/               # 외부 시스템 통신 (API 등 Out Adapter)
│   └── api/
│       ├── userApi.ts
│       └── eventHistoryApi.ts
│
├── usecase/                      # 유스케이스 계층 (Application Layer)
│   ├── user/
│   │   ├── UserCommand.ts         # Command 인터페이스
│   │   ├── UserQuery.ts           # Query 인터페이스
│   │   └── service/               # 실제 구현체 
│   │       └── UserService.ts     # (or UserCommandService.ts, UserQueryService.ts)
│   │
│   └── event/
│       ├── EventHistoryCommand.ts # Command 인터페이스
│       ├── EventHistoryQuery.ts   # Query 인터페이스
│       └── service/               # 실제 구현체 
│           └── EventHistoryService.ts
│
└── store/                        # (선택) 상태 관리 (Pinia 등 사용 시)
    └── ...

```