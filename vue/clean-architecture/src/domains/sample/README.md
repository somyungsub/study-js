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
│   │   └── UserTypes.ts
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


## 전체 폴더 구조 v1.0
- required / provided 추가 -> 헥사고날 아키
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
│   │   └── UserTypes.ts
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
│   │   ├── required/              # 인프라에 요구하는 Port (Interface)
│   │   │   └── UserRepository.ts
│   │   ├── provided/              # 인프라에서 제공받는 구현체 (Adapter)
│   │   │   └── UserRepositoryImpl.ts
│   │   ├── UserCommand.ts         # Command 인터페이스
│   │   ├── UserQuery.ts           # Query 인터페이스
│   │   └── service/
│   │       └── UserService.ts     # 실제 구현체 
│   │
│   └── event/
│       ├── required/              # 인프라에 요구하는 Port (Interface)
│       │   └── EventHistoryRepository.ts
│       ├── provided/              # 인프라에서 제공받는 구현체 (Adapter)
│       │   └── EventHistoryRepositoryImpl.ts
│       ├── EventHistoryCommand.ts
│       ├── EventHistoryQuery.ts
│       └── service/
│           └── EventHistoryService.ts
│
└── store/                        # (선택) 상태 관리 (Pinia 등 사용 시)
    └── ...
```


## (최종) 프론트 클린아키텍처 
```text
modules/
└── system-config/
    ├── adapter/
    │   ├── system/
    │   └── ui/
    │       ├── in/
    │       │   └── composable/
    │       │       └── useUiConfig.ts
    │       └── out/
    │           └── api/
    │               └── UiConfigWebApi.ts
    │
    ├── application/
    │   ├── system/
    │   └── ui/
    │       ├── provided/
    │       │   ├── UiConfigCommand.ts
    │       │   ├── UiConfigCopy.ts
    │       │   └── UiConfigLoad.ts
    │       ├── required/
    │       │   ├── UiConfigCommand.ts
    │       │   └── UiConfigQuery.ts
    │       └── usecase/
    │           └── UiConfigService.ts
    │
    ├── domain/
    │   ├── system/
    │   └── ui/
    │       └── entity/
    │           └── UiConfig.ts
    │
    └── page/
        ├── system/
        └── ui/
            ├── components/
            ├── popup/
            │   ├── UiConfigPopup.vue
            │   └── UiConfigDetail.vue
            ├── UiConfigManagementMain.scss
            └── UiConfigManagementMain.vue
```

| 레이어                             | 대표 경로                                                                          | 역할/내용                                           | 의존 규칙(허용 → 금지)                                                                | 비고/예시                                                              |
| ------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Page (View)**                 | `page/ui/*`                                                                    | 라우트 엔트리, 화면 컴포넌트 렌더링, 이벤트 바인딩                   | Page → **Adapter In** → Application / **(금지)** Page가 Application/Domain 직접 참조 | `UiConfigManagementMain.vue`, 팝업/세부 화면 포함                          |
| **Adapter In (Composable/VM)**  | `adapter/ui/in/composable/useUiConfig.ts`                                      | 유즈케이스 호출, DTO→ViewModel 매핑, 화면 상태 orchestration | Adapter In → **Application (provided)** / **(금지)** HTTP 직접 호출, Domain 직접 갱신   | 기존 Facade 역할을 컴포저블로 수행                                             |
| **Adapter Out (API 등)**         | `adapter/ui/out/api/UiConfigWebApi.ts`                                         | 외부 통신 구현(HTTP 등), 외부↔내부 모델 변환(AC)               | Adapter Out ⟵ **Application (required)** / **(금지)** Page 직접 호출                | `UiConfigReader/Writer` 등 required 포트 구현체                          |
| **Application – Provided (계약)** | `application/ui/provided/*`                                                    | 외부(어댑터 in)가 호출할 유즈케이스 **인터페이스**                 | Provided는 구현 없음 / **(금지)** 어댑터 참조                                             | `UiConfigLoad.ts`, `UiConfigCopy.ts`, `UiConfigCommand.ts` (인터페이스) |
| **Application – Required (계약)** | `application/ui/required/*`                                                    | 유즈케이스가 필요로 하는 외부 의존 **포트 인터페이스**                | Required는 구현 없음 / **(금지)** 어댑터 참조                                             | `UiConfigQuery.ts`, `UiConfigCommand.ts` (포트)                      |
| **Application – Usecase (구현)**  | `application/ui/usecase/UiConfigService.ts`                                    | Provided 인터페이스 구현, Required 포트 주입받아 오케스트레이션     | Usecase → **Required**, **Domain** / **(금지)** 어댑터 참조                          | 쿼리/커맨드 로직 포함 (필요시 `queries/`, `commands/`로 세분화 가능)                 |
| **Domain (Entity/VO/Service)**  | `domain/ui/entity/UiConfig.ts`                                                 | 순수 비즈니스 규칙/모델 (UI/네트워크 모름)                      | **어느 어댑터/외부도 의존 금지**                                                          | 도메인 서비스/VO 필요 시 `service/`, `vo/` 추가                               |
| **Module 공용 UI**                | `page/ui/components/*`                                                         | 해당 모듈 내 여러 화면에서 재사용할 View 전용 컴포넌트               | Components → **Adapter In**(선택), **Domain 직접금지**                              | 스타일/프리젠테이션 로직만                                                     |
| **system 하위**                   | `adapter/system/*`, `application/system/*`, `domain/system/*`, `page/system/*` | system 기능이 추가될 때 동일 패턴으로 확장                     | 동일 규칙 준수                                                                      | MFE 전환 시 ui/system 각각 분리 가능                                        |

메모(선택 개선 포인트)
- 네이밍을 더 명확히 하려면:
  - Provided: LoadUiConfigUseCase.ts, CopyUiConfigUseCase.ts, UpdateUiConfigUseCase.ts 
  - Required: UiConfigReader.ts, UiConfigWriter.ts 
  - Usecase 폴더: usecases/queries/…, usecases/commands/… 세분화 
  - useUiConfig.ts는 **useUiConfigVM.ts**처럼 의도를 드러내면 탐색성이 좋아집니다. 
  - ESLint로 의존 경계 강제: adapter → application → domain만 허용, 역참조 금지.
- 계층/모델/feature 형태로 간소화
  - application/system/provided,requireded
  - adapter/system/composable
  - adapter/system/api
- 원래대로라면 -> in,out을 명시해주는게 더 깔끔
  - application/system/provided, requireded
  - adapter/system/in/composable
  - adapter/system/out/api

### 최종적으로 adapter, application 간소화 기반으로
- adapter
  - adapter/{모델}/composable (in)
  - adapter/{모델}/api (out)
- application
  - application/{모델}/provided (in)
  - application/{모델}/required (out)