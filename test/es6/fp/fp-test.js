let arr = [
  {name: "sso", age: 12, price: 99000, isSuccess: true},
  {name: "bbs2", age: 24, price: 21000, isSuccess: false},
  {name: "bbs2", age: 27, price: 1000, isSuccess: true},
  {name: "cs223", age: 50, price: 14400, isSuccess: false},
  {name: "s114", age: 91, price: 51030, isSuccess: true},
  {name: "asbb5", age: 28, price: 12040, isSuccess: false},
  {name: "ks7", age: 34, price: 4000, isSuccess: true},
  {name: "dsa22222", age: 55, price: 5000, isSuccess: false},
  {name: "2saa2", age: 62, price: 660600, isSuccess: true},
  {name: "sddd211", age: 41, price: 101230, isSuccess: false},
];


console.log("=============== filter =============");
console.log(arr.filter(value => value.price > 100000));
console.log(arr.filter(value => value.price > 10000));
console.log(arr.filter(value => value.price > 5500));
console.log(arr.filter(value => value.price > 20000));
console.log(arr.filter(value => value.price > 20000));

console.log(arr.filter(value => value.isSuccess));
console.log(arr.filter(value => value.name.length > 5));

console.log(
  arr.filter(value => value.name.length > 5)
    .filter(value => value.age > 50)
);

console.log("=============== map =============");
console.log(
  arr.map(value => {
    return {ageRange: Math.floor((value.age / 10)) * 10 + "대", priceDivide: value.price / 2};
  })
);
console.log(
  arr.map(value => {
    return {ageRange: Math.floor((value.age / 10)) * 10 + "대", priceDivide: value.price / 2};
  })
    .filter(value => value.priceDivide > 10000)
);

console.log(
  arr.map(value => {
    return {ageRange: Math.floor((value.age / 10)) * 10 + "대", priceDivide: value.price / 2};
  })
    .filter(value => value.ageRange === "30대" || value.ageRange === "20대")
);

console.log("===============  reduce =============");
console.log(
  arr.map(value => value.price)
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    })
);

console.log(
  arr.map(value => value.age)
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    })
);

console.log("===============  sort =============");
let sort = arr.map(value => value.age).sort();
console.log(sort);
let sum = 0;
for (let i = 0; i < sort.length; i++) {
  sum += sort[i];
}
console.log(sum);
console.log([...arr].reverse());

console.log("===============  find =============");
console.log(arr.find(value => value.price > 5000));
console.log(arr.find(value => value.price > 50000));
console.log(arr.find(value => value.price > 100000));
console.log(arr.find(value => value.age > 50));

console.log(arr.findIndex(value => value.price > 5000));
console.log(arr.findIndex(value => value.price > 50000));
console.log(arr.findIndex(value => value.price > 100000));

console.log("===============  join =============");
console.log(arr.map(value => value.name).join(","));
console.log(arr.map(value => value.age).join(","));
console.log(arr.map(value => value.price).join("::"));


console.log("===============  fill =============");
console.log([...arr].fill({}, 5));
console.log([...arr].fill({}, 3, 5));

console.log("===============  copyWithin =============");

console.log([...arr]);
console.log([...arr].copyWithin(1, 3, 6));
console.log([...arr].copyWithin(3, 5));
