/*
  실행명령어
    - npx node create-domain-folders.cjs 도메인명 모듈명(하위도메인)
      - 타겟 경로 : src/domains/${도메인명}/modules/${모듈명}

    - 예 : npx node create-domain-folders.cjs sample user
      - 생성 경로 예 : src/domains/sample/modules/user
      - 하위 폴더(계층) 생성
          'page',
          'composable',
          'domain',
          'application',
          'infrastructure',
 */
const fs = require('fs');
const path = require('path');

const domainPath = process.argv[2]; // ex) sample
const moduleName = process.argv[3]; // ex) user
if (!domainPath || !moduleName) {
  console.error('❌ 인자 누락: 예) npx node create-domain-folders.js');
  process.exit(1);
}

// Root 기준에서 src/domains/{argPath}
const basePath = path.join(process.cwd(), 'src', 'domains', domainPath, 'modules', moduleName);
const folders = [
  'page',
  'composable',
  'domain',
  'application',
  'infrastructure',
];

if (fs.existsSync(basePath)) {
  console.error(`❌ ${domainPath} 폴더가 이미 존재합니다: ${basePath}`);
  process.exit(1);
}

// 도메인 하위 루트 만들기
fs.mkdirSync(basePath, {recursive: true});

// 6계층 하위 폴더 만들기
folders.forEach(dir => {
  fs.mkdirSync(path.join(basePath, dir));
});

console.log(`✅ '${domainPath}' 도메인 계층이 생성되었습니다: ${basePath}`);
