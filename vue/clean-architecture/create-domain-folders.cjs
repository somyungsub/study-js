/*
    1.도메인 생성 예
    - npx node create-domain-folders.cjs 도메인 -> 타겟 경로 : src/domains/${도메인}
      - 실행명령어 : npx node create-domain-folders.cjs sample
      - 생성 경로 예 : src/domains/sample
      - 하위 폴더 생성 (관리단위)
          'stores',
          'modules',
          'utils',
          'components'

    2.하위도메인 생성 예 : npx node create-domain-folders.cjs 도메인 하위도메인 -> 타겟 경로 : src/domains/${도메인}/modules/${하위도메인}
      - 실행명령어 : npx node create-domain-folders.cjs sample user
      - 생성 경로 예 : src/domains/sample/modules/user
      - 하위 폴더 생성 (계층)
          'page',
          'composable',
          'domain',
          'application',
          'infrastructure',
*/

const fs = require('fs');
const path = require('path');

const domainName = process.argv[2];  // 예) 도메인 : sample
const moduleName = process.argv[3];  // 예) 하위도메인 : user

if (!domainName) {
  console.error(`❌ 인자 누락:
  ▶︎ 인자 1개: npx node create-folders.cjs sample
    → src/domains/sample + [stores, modules, utils, components]

  ▶︎ 인자 2개: npx node create-folders.cjs sample user
    → src/domains/sample/modules/user + [page, composable, domain, application, infrastructure]
  `);
  process.exit(1);
}

// 기준 경로
const basePath = moduleName
  ? path.join(process.cwd(), 'src', 'domains', domainName, 'modules', moduleName)
  : path.join(process.cwd(), 'src', 'domains', domainName);

// 생성할 하위 폴더
const folders = moduleName
  ? ['page', 'composable', 'domain', 'application', 'infrastructure']
  : ['stores', 'modules', 'utils', 'components'];

// 이미 있으면 경고
if (fs.existsSync(basePath)) {
  console.error(`❌ 이미 존재합니다: ${basePath}`);
  process.exit(1);
}

// 생성
fs.mkdirSync(basePath, {recursive: true});
folders.forEach(folder => {
  fs.mkdirSync(path.join(basePath, folder));
});

console.log(`✅ 생성 완료:
${basePath}
 ├─ ${folders.join('\n ├─ ')}
`);
