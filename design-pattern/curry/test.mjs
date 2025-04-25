import {UserBase} from './curry-test1.mjs';

const user1 = UserBase({id:'ssosso', password:'1234#1234', email: 'ssss@naver.com'});
console.log(user1);

const test1 = user1.apply(user1,[{address:'테스트1', name:'이름', age: 100}]);
const detail = user1({address: '서울시', name: 'sss', age: 30});
const detail2 = user1({address: '서울시2', name: 'sss2', age: 40});
printUser('test1', test1);
printUser('detail-1', detail);
printUser('detail-2', detail2);

console.log("======= 유저 데이터 변경 후 -> 메모리 유지,같은 참조 하므로 같이 변경됨");
test1.setUserData({id:'ssosso 변경', password:'1234#1234 변경', email:'ssss@naver.com 변경'});
printUser('test1', test1);
printUser('detail-1', detail);
printUser('detail-2', detail2);

console.log("======= detail-2 데이터 변경 후 -> 하위는 새로운 객체 생성공간이므로 따로 메모리공간 따로임");
detail2.setDetailData({address: '서울시2-변경', name: 'sss2-변경', age: 40 * 2});
printUser('test1', test1);
printUser('detail-1', detail);
printUser('detail-2', detail2);

function printUser(testName,detail) {
  console.log(`========================${testName}`);
  console.log(detail.getUserData());
  console.log(detail.getDetailData());
}

