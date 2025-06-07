[//]: # (# Vue 3 + TypeScript + Vite)

[//]: # ()
[//]: # (This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs]&#40;https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup&#41; to learn more.)

[//]: # ()
[//]: # (Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide]&#40;https://vuejs.org/guide/typescript/overview.html#project-setup&#41;.)


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