// var obj1 = {
//   name: 'obj1',
//   func: function () {
//     console.log(this.name);
//   }
// };
// setTimeout(obj1.func.bind(obj1), 1000);
//
// var obj2 = {name: 'obj2'};
// setTimeout(obj1.func.bind(obj2), 1500);

// 콜백지옥 해결 - 기명함수로 변환
// var coffeeList = '';
//
// var addEspresso = function (name) {
//   coffeeList = name;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, '아메라키노'); // call 1
// };
//
// var addAmericano = function (name) {
//   coffeeList += ',' + name;
//   console.log(coffeeList);
//   setTimeout(addMocha, 500, '카페모카');
// };
//
// var addMocha = function (name) {
//   coffeeList += ', ' + name;
//   console.log(coffeeList);
//   setTimeout(addLatte, 500, '카페라떼');
// };
//
// var addLatte = function (name) {
//   coffeeList += ', ' + name;
//   console.log(coffeeList);
// };
//
// setTimeout(addEspresso, 500, '에소프레소');

// Promise
// new Promise(function (resolve) {
//   setTimeout(function () {
//     var name = '에스프레소';
//     console.log(name);
//     resolve(name);
//   }, 500);
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 아메리카노';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 카페라떼';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// });

// 비동기 작업의 동기적 표현 - Promise(2)
// var addCoffee = function (name) {
//   return function (prevName) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         var newName = prevName ? (prevName + ', ' + name) : name;
//         console.log(newName);
//         resolve(newName);
//       }, 500);
//     });
//   };
// };
//
// addCoffee('에소프레소')()
//   .then(addCoffee('아메리카노'))
//   .then(addCoffee('카페모카'))
//   .then(addCoffee('카페라떼'));

// 비동기 작업의 동기적 표현 - Promise(3) -Generator
// var addCoffee = function (prevName, name) {
//   setTimeout(function () {
//     coffeeMaker.next(prevName ? prevName + ', ' + name : name);
//   }, 500);
// };
//
// var coffeeGenerator = function* () {
//   var espresso = yield addCoffee('', '에스프레소');
//   console.log(espresso);
//
//   var americano = yield addCoffee(espresso, '아메리카노');
//   console.log(americano);
//
//   var mocha = yield addCoffee(americano, '카페모카');
//   console.log(mocha);
//
//   var latte = yield addCoffee(mocha, '카페라떼');
//   console.log(latte);
// };
//
// var coffeeMaker = coffeeGenerator();
// coffeeMaker.next();

// Promise + async/await
var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

var coffeeMaker = async function () {
  var coffeeList = '';
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ',' : '') + await addCoffee(name);
  };

  await _addCoffee('에스프레소');
  console.log(coffeeList);

  await _addCoffee('아메리카노');
  console.log(coffeeList);

  await _addCoffee('카페모카');
  console.log(coffeeList);

  await _addCoffee('카페라떼');
  console.log(coffeeList);
};

coffeeMaker();

