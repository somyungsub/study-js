let _ = require("lodash");

let users = [
  {"name": "sss", "age": 20, "id": "1"},
  {"name": "abc", "age": 30, "id": "2"},
  {"name": "aasda", "age": 40, "id": "3"},
  {"name": "123", "age": 10, "id": "4"},
  {"name": "sosos1123", "age": 25, "id": "5"},
  {"name": "hiyo", "age": 12, "id": "6"},
  {"name": "aasdas11", "age": 23, "id": "7"},
  {"name": "h1235f", "age": 99, "id": "8"},
  {"name": "1222sss", "age": 87, "id": "9"},
];
let find = _.find(users, (user) => user.age > 30);
console.log(find);

let ageSum = _.reduce(users, (prev, curr) => {
  return {age: prev.age + curr.age};
});
console.log(ageSum.age);
console.log(
  _.map(users, value => value.age)
  .reduce((previousValue, currentValue) => previousValue + currentValue)
);

console.log(
  _.reverse(users)
);

console.log(
  _.sortedUniqBy(users, value => value.age)
);

console.log(
  _.filter(users, value => value.age < 40)
);

console.log(
  _.filter(users, value => value.age < 40)
    .map(value => value.name + " : " + value.age)
    .reverse()
);

_.forEach(users, value => {
  console.log(value);
})

let number = _.reduce([1, 2, 3, 4, 5], (prev, curr) => {
  return prev + curr;
});

console.log(number);