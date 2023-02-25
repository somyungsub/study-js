let obj = {
  a: 10,
  b: 20
};
console.log("======= 객체 =======");
console.log("기본 산개 : ",{...obj});
console.log("산개후 배열만들기 :", [{...obj}]);
console.log("키벨류추가 : ", [{...obj, c: "test"}]);
console.log("키벨류추가2 : ", [{...obj, c: "test"}, {...obj, c: "test2"}, {obj, d: "abc"}]);
console.log("키벨류추가3 : ", [{...obj, c: "test"}, {...obj, c: "test2", add: {...obj, d: "abc"}}]);

let arr = [
  {a: 10, b: 20},
  {a: 101, b: 201},
  {a: 102, b: 202},
];
console.log("======= 배열 =======");
console.log("객체로 만들기 : ",{...arr});
console.log("기본산개 : ",[...arr]);
console.log("추가 : ", [...arr, {a: 1000, b: 2000}]);
console.log("추가2 : ", [...arr, {a: 1000, b: 2000, c: 3000}, 101010]);

let arr2 = [
  {c: 40000, d: 121},
  {c: 40001, d: 1212},
];

console.log("추가3 : ", [...arr, {a: 1000, b: 2000, c: 3000}, 101010, ...arr2]);
console.log("추가4 : ", [...arr, {a: 1000, b: 2000, c: 3000}, 101010, {...arr2}]);
console.log("추가5 : ", [...arr, {a: 1000, b: 2000, c: 3000}, 101010, [{...arr2}]]);
console.log("추가6 : ", [...arr, {a: 1000, b: 2000, c: 3000}, 101010, [{...arr2, e: 55555}]]);

let arr3 = [...arr, {a: 1000, b: 2000, c: 3000}, 101010, [{...arr2}]];
console.log(arr3[5]);

let arr4 = [...arr, {a: 1000, b: 2000, c: 3000}, 101010, [{...arr2, e: 55555}]];
console.log(arr4[5]);

