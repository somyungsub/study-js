(function () {


})();

class BaseStructure {
  constructor() {
    console.log(" Structure");
  }
}

class Castle extends BaseStructure {

  constructor(name) {
    super();
  }

  build() {
    console.log("Castle! built")
  }
}


class LoginPage {
  constructor(container) {  // typescript -> type : jQuery
    container.on("click", "login-link", (item) => {
      this.login();
    });

    container.on("click", "login-link", function (item) {
      this.login();
    });
  }

  login() {
    console.log("login!");
  }
}

var LoginPage = (function () {
  function LoginPage(container) {
    var _this = this; // 외부 this

    // 람다 컴파일 후
    container.on("click", "login-link", function (item) {
      _this.login();  // 외부 this를 사용함
    });

    // 컴파일 후 -> 그대로
    container.on("click", "login-link", function (item) {
      this.login();
    });
  }

  LoginPage.prototype.login = function () {
    console.log("login");
  };
  return LoginPage;
})();

var _extends = this._extends || function (d, b) {
  function __() {

    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    this.constructor = d;
  }

  __.prototype = b.prototype;

  d.prototype = new __();
};

var BaseStructure = (function () {
  function BaseStructure() {
    console.log("Structure");
  }

  return BaseStructure;

})();

var Castle = (function (_super) {
  _extends(Castle, _super);

  function Castle(name) {
    _super.call(this);
    this.name = name;
  }

  Castle.prototype.build = function () {
    console.log("Castle built" + this.name);
  };

  return Castle;
})(BaseStructure);
