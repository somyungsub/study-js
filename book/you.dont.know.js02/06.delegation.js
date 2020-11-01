(function () {

  // 디버깅
  console.log("======= 1번째 =======");

  function Foo() {
  }

  var a1 = new Foo();
  console.log(a1);
  console.log(a1.constructor);
  console.log(a1.constructor.name);

  console.log("======= 2번째 =======");

  function Foo2() {
  }

  var a2 = new Foo2();

  Foo2.prototype.constructor = function Gotcha() {
  };

  console.log(a2.constructor);
  console.log(a2.constructor.name);

  // OO, OLOO 코딩스타일
  console.log("======= OO Style =======");

  function Foo3(who) {
    this.me = who;
  }

  Foo3.prototype.identify = function () {
    return "I am " + this.me;
  };

  function Bar(who) {
    Foo3.call(this, who);
  }

  Bar.prototype = Object.create(Foo3.prototype);

  Bar.prototype.speak = function () {
    console.log("Hello, " + this.identify() + ".");
  };

  var b1 = new Bar("b1");
  var b2 = new Bar("b2");

  b1.speak();
  b2.speak();

  console.log("======= OLOO Style =======");
  Foo3 = {
    init: function (who) {
      this.me = who;
    },
    identify: function () {
      return "I am " + this.me;
    }
  };

  Bar = Object.create(Foo3);
  Bar.speak = function () {
    console.log("Hello, " + this.identify() + ".");
  };

  var b1 = Object.create(Bar);
  b1.init("b1");
  var b2 = Object.create(Bar);
  b2.init("b2");

  b1.speak();
  b2.speak();

  // 6.2 클래스 vs 객체
  console.log("======= 클래스 ======= ");
  // classTest();
  // es6ClassTest();
  // OLOOStyle;

  // 6.3 더 간단한 디자인 (with promise)
  console.log("====== 더간잔한 디자인 =====");
  simpleDesign();





})();

function classTest() {
  console.log("고전적 클래스 디자인 (jQuery 기반)");

  function Widget(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }

  Widget.prototype.render = function ($where) {
    if (this.$elem) {
      this.$elem.css(
          {
            width: this.width + "px",
            height: this.height + "px"
          }
      ).appendTo($where);
    }
  };

  function Button(width, height, label) {
    // super 생성자 호출
    Widget.call(this, width, height);
    this.label = label;
    this.$elem = $("<button>").text(this.label);
  }

  // 버튼은 Widget 으로부터 상속 받는다
  Button.prototype = Object.create(Widget.prototype);

  // 상속받은 render를 오버라이드 한다
  Button.prototype.render = function ($where) {
    // super 호출
    Widget.prototype.render.call(this, $where);
    this.$elem.click(this.onClick.bind(this));
  };

  Button.prototype.onClick = function (evt) {
    console.log(this.label + " 버튼일 클릭됨");
  };

  $(document).ready(function () {
    var $body = $(document.body);
    var btn1 = new Button(125, 30, "Hello");
    var btn2 = new Button(150, 40, "World");
    btn1.render($body);
    btn2.render($body);
  });
}

function es6ClassTest() {
  class Widget{
    constructor(width, height) {
      this.width = width || 50;
      this.height = height || 50;
      this.$elem = null;
    }

    render($where) {
      if (this.$elem) {
        this.$elem.css(
            {
              width: this.width + "px",
              height: this.height + "px"
            }
        ).appendTo($where);
      }
    }
  }

  class Button extends Widget {
    constructor(width, height, label) {
      super(width, height);
      this.label = label || "Default";
      this.$elem = $("<button>").text(this.label);
    }
    render($where) {
      super.render($where);
      this.$elem.click(this.onClick.bind(this));
    }

    onClick(evt) {
      console.log(this.label + " 버튼이 클릭됨")
    }
  }

  $(document).ready(function () {
    var $body = $(document.body);
    var btn1 = new Button(125, 30, "Hello");
    var btn2 = new Button(150, 40, "World");
    btn1.render($body);
    btn2.render($body);
  });

}

function OLOOStyle() {
  console.log("OLOO 스타일");
  var Widget = {
    init: function (width, height) {
      this.width = width || 50;
      this.height = height || 50;
      this.$elem = null;
    },
    insert: function ($where) {
      if (this.$elem) {
        this.$elem.css(
            {
              width: this.width + "px",
              height: this.height + "px"
            }
        ).appendTo($where);
      }
    }
  };

  var Button = Object.create(Widget);
  Button.setup = function (width, height, label) {
    // 위임 호출
    this.init(width, height);
    this.label = label || "Default";
    this.$elem = $("<button>").text(this.label);
  };

  Button.build = function ($where) {
    // 위임 호출
    this.insert($where);
    this.$elem.click(this.onClick.bind(this));
  };

  Button.onClick = function (evt) {
    console.log(this.label + " 버튼이 클릭됨")
  };

  $(document).ready(function () {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    btn1.setup(125, 30, "Hello");

    var btn2 = Object.create(Button);
    btn2.setup(150, 40, "World");

    bt1.build($body);
    bt2.build($body);

  });
}


function simpleDesign() {


  // 부모클래스
  function Controller() {
    this.errors = [];
  }

  Controller.prototype.showDialog = function (title, msg) {
    console.log(title + " : " + msg);
  };

  Controller.prototype.success = function (msg) {
    this.showDialog("Success", msg);
  };
  Controller.prototype.failure = function (error) {
    this.errors.push(error);
    this.showDialog("Error", error);
  };

  // 자식 클래스 1
  function LoginController() {
    Controller.call(this);
  }

  LoginController.prototype = Object.create(Controller.prototype);

  LoginController.prototype.getUser = function () {
    return document.getElementById("login_username").value;
  };
  LoginController.prototype.password = function () {
    return document.getElementById("login_password").value;
  };

  LoginController.prototype.validateEntry = function () {
    // 너무길다..

  };

  LoginController.prototype.failure = function (err) {
    // super call
    Controller.prototype.failure.call(this, "로그인 실패  : " + err);
  };

}