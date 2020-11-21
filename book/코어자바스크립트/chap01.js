// 가변
var user = {
  name: 'Jaenam',
  gender: 'male'
}

var changeName = function (user, userName) {
  var newUser = user;
  newUser.name = userName;
  return newUser;
};

var user2 = changeName(user, 'Jung');
if (user !== user2) {
  console.log('유저 정보가 변경되었습니다');
}

console.log(user.name, user2.name); // user(원본)까지 name 속성값이 변경됨, Jung, Jung
console.log(user === user2);        // true

// 불변성
changeName = function (user, newName) {

  // 객체를 새로 생성하여 반환
  return {
    name: newName,
    gender: user.gender
  }
};

user2 = changeName(user, 'Jung2');
if (user !== user2) {
  console.log('유저 정보가 변경되었습니다');
}

console.log(user.name, user2.name); // Jung, Jung2
console.log(user === user2);        // false

copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user3 = copyObject(user);
user3.name = 'Copy';

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다');
}

console.log(user.name, user3.name); // Jung, Copy
console.log(user === user3);        // false

console.log("====================얕은복사")
user = {
  name: 'Jaenam',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc'
  }
}

var user4 = copyObject(user);
user4.name = 'Jung';
console.log(user.name === user4.name);  // false

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user4.urls.portfolio);  // true (얕은복사, 원본 변경이 복사본에 변경 영향 미침)

user4.urls.blog = '';
console.log(user.urls.blog === user4.urls.blog);  // true (얕은복사, 복사본 변경이 원본 변경에 영향 미침)

console.log("====================깊은복사")
user = {
  name: 'Jaenam',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc'
  }
}

var user5 = copyObject(user);
user5.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user5.urls.portfolio);  // false

user5.urls.blog = '';
console.log(user.urls.blog === user5.urls.blog);  // false

var copyObjectDeep = function (target) {
  var result = {};

  if (typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target
  }

  return result;
};

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2]
  }
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 30;

console.log(obj);
console.log(obj2);

console.log("========JSON 활용한 깊은 복사")
var copyObjectViaJSON = function (target) {
  return JSON.parse(JSON.stringify(target));
};

obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    func1: function () {
      console.log(3);
    },
    func2: function () {
      console.log(4);
    }
  }
}

obj2 = copyObjectViaJSON(obj);
obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);