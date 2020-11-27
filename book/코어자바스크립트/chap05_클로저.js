// var outer = function () {   // 외부함수
//   var a = 1;
//   var inner = function () { // 내부함수
//     console.log(++a);       // 내부에서 외부 함수의 변수 a를 참조
//   };
//
//   inner();
// };
//
// outer();

// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//
//   return inner(); // 실행 된 값 반환
// };
//
// var outer2 = outer();
// console.log(outer2); // 2
// console.log(outer());

// 5-3
// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//   return inner;
// };
//
// var outer2 = outer();   // inner
// console.log(outer2());  // inner() : 2
// console.log(outer2());  // inner() : 3

// 5-4 return 없이도 클로저가 발생하는 경우
// (function () {
//   var a = 0;
//   var intervalId = null;
//   var inner = function () {
//     if (++a >= 10) {
//       clearInterval(intervalId);
//     }
//     console.log(a);
//   };
//   intervalId = setInterval(inner, 1000);
// })();

// (function () {
//   var count = 0;
//   var button = document.createElement('button');
//   button.innerText = 'click2';
//   button.addEventListener('click', function () {
//     console.log(++count, 'time clicked');
//   });
//   document.body.appendChild(button);
// })();

// (function () {
//   var count = 0;
//   var btn = document.getElementById("test_btn");
//   btn.addEventListener('click', function () {
//     console.log(++count, 'time clicked');
//   });
// })();


// 5-5 클로저의 메모리 관리
// var outer = (function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//   return inner;
// })(); // outer = inner
// console.log(outer());
// console.log(outer());
// outer = null; // 메모리 관리 GC 대상으로 만들기

// (function () {
//   var a = 0;
//   var intervalId = null;
//   var inner = function () {
//     if (++a >= 10) {
//       clearInterval(intervalId);
//       inner = null; // inner 식별자의 함수 참조를 끊음
//     }
//     console.log(a);
//   };
//   intervalId = setInterval(inner, null);
// })();

// (function () {
//   var count = 0;
//   var button = document.createElement('button');
//   button.innerText = 'click';
//
//   var clickHandler = function () {
//     console.log(++count, 'times clicked');
//     if (count >= 10) {
//       button.removeEventListener('click', clickHandler);
//       clickHandler = null; // clickHandler 식발자의 함수 참조를 끊음
//     }
//   };
//   button.addEventListener('click', clickHandler);
//   document.body.appendChild(button);
// })();

// 5-6 콜백함수와 클로저
// var fruits = ['apple', 'banana', 'peach'];
// var $ul = document.createElement('ul');   // 공통코드

// 1
// fruits.forEach(function (fruit) {                     // A
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', function () {   // B
//     alert('your choice is ' + fruit);
//   });
//   $ul.appendChild($li);
// });
// document.body.appendChild($ul);

// 2
// var alertFruit = function (fruit) {
//   alert('your choice is ' + fruit);
// };
//
// fruits.forEach(function (fruit) {
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', alertFruit);
//   $ul.appendChild($li);
// });
//
// document.body.appendChild($ul);
// alertFruit(fruits[1]);

// 3
// fruits.forEach(function (fruit) {
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', alertFruit.bind(null, fruit));
//   $ul.appendChild($li);
// });
//
// document.body.appendChild($ul);
// alertFruit(fruits[1]);

// 4 고차함수 이용
// var alertFruitBuilder = function (fruit) {
//   return function () {
//     alert('your choice is ' + fruit);
//   };
// };
//
// fruits.forEach(function (fruit) {
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', alertFruitBuilder(fruit));
//   $ul.appendChild($li);
// });
// document.body.appendChild($ul);

// 정보 은닉화
// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//   return inner;
// };
//
// var outer2 = outer();
// console.log(outer2());
// console.log(outer2());

// 간단한 게임을 통한 정보 은닉
// var car = {
//   fuel: Math.ceil(Math.random() * 10 + 10), // 연료(L)
//   power: Math.ceil(Math.random() * 3 + 2),  // 연비(km/L)
//   moved: 0, // 총이동거리
//   run: function () {
//     var km = Math.ceil(Math.random() * 6);
//     var wasteFuel = km / this.power;
//     if (this.fuel < wasteFuel) {
//       console.log("이동불가");
//       return;
//     }
//
//     this.fuel -= wasteFuel;
//     this.moved += km;
//     console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
//   }
// };

// 마음대로 변경이 가능... 은닉x
// car.fuel = 10000;
// car.power = 1000;
// car.moved = 1000;

// 클로저를 활용하여 은닉
/*var createCar = function () {
  // private
  var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
  var power = Math.ceil(Math.random() * 3 + 2);  // 연비(km/L)
  var moved = 0; // 총이동거리

  // public
  // return {
  //   get moved() {
  //     return moved;
  //   },
  //   run: function () {
  //     var km = Math.ceil(Math.random() * 6);
  //     var wasteFuel = km / power;
  //     if (fuel < wasteFuel) {
  //       console.log("이동불가");
  //       return;
  //     }
  //
  //     fuel -= wasteFuel;
  //     moved += km;
  //     console.log(km + 'km 이동 (총 ' + moved + 'km. 남은 연료:' + fuel);
  //   }
  // }

  // public2
  var publicMembers = {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("이동불가");
        return;
      }

      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km 이동 (총 ' + moved + 'km. 남은 연료:' + fuel);
    }
  };

  Object.freeze(publicMembers);
  return publicMembers;
};*/

// var carCrate = createCar();
// carCrate.run();
// console.log(carCrate.moved);
// console.log(carCrate.fuel);
// console.log(carCrate.power);
//
// carCrate.fuel = 1000;
// console.log(carCrate.fuel);
// carCrate.run();
//
// carCrate.power = 100;
// console.log(carCrate.power);
// carCrate.run();
//
// carCrate.moved = 1000;
// console.log(carCrate.moved);
// carCrate.run();

// 5-13 bind 메서드 활용 : 부분적용함수
var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

var addPartial = add.bind(null, 1, 2, 3, 4, 5); // func 반환
console.log(addPartial(6, 7, 8, 9, 10));
console.log(addPartial(6, 7, 8));

// 부분적용함수 2
console.log("======= 부분적용2 =======");
var partial = function () {
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];
  if (typeof func !== 'function') {
    throw new Error('첫번째 인자가 함수가 아닙니다');
  }

  return function () {
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    var restArgs = Array.prototype.slice.call(arguments);

    return func.apply(this, partialArgs.concat(restArgs));
  };
};

var addPartial2 = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial2(6, 7, 8, 9, 10));
console.log(addPartial2(6, 7, 8));

var dog = {
  name: '강아지',
  greet: partial(function (prefix, suffix) {
    return prefix + this.name + suffix;
  }, '왈왈, ')
};

console.log(dog.greet("입니다!"));


// 5-16 디바운스
var debounce = function (eventName, func, wait) {
  var timeoutId = null;
  return function (event) {
    var self = this;
    console.log(eventName, 'event 발생');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};

var moveHandler = function (e) {
  console.log('move evnet 처리')
};

var wheelHandler = function (e) {
  console.log('wheel evnet 처리');
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));