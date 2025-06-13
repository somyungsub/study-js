// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2022: true,
//     node: true,
//   },
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//     ecmaVersion: 2022,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:vue/vue3-recommended',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   plugins: ['vue', '@typescript-eslint'],
//   rules: {
//     // TypeScript에서 사용되지 않는 변수 경고 끄기
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': 'off',
//
//     // 데코레이터 관련 타입 오류 방지
//     '@typescript-eslint/no-namespace': 'off',
//
//     // any 타입 허용 (필요 시)
//     '@typescript-eslint/no-explicit-any': 'off',
//
//     // Vue 단일 단어 컴포넌트 이름 허용
//     'vue/multi-word-component-names': 'off',
//
//     // 기타 세미콜론 설정 등
//     'semi': ['error', 'always'],
//     '@typescript-eslint/semi': ['error', 'always'],
//   },
// };
