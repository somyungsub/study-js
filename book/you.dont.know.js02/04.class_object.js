(function () {

  // class

  // Vehicle
  // class Vehicle {
  //   constructor(engines) {
  //     this.engines = engines;
  //   }
  //
  //   ignition() {
  //     console.log(this.engines, "엔진을 켠다");
  //   }
  //
  //   drive() {
  //     this.ignition();
  //     console.log("방향을 맞추고 앞으로 간다");
  //   }
  // }
  //
  // // Car
  // class Car extends Vehicle {
  //   constructor(engines, wheels) {
  //     super(engines);
  //     this.wheels = wheels;
  //   }
  //
  //   drive() {
  //     super.drive();
  //     console.log(this.wheels, "개의 바퀴로 굴러간다");
  //   }
  // }
  //
  // var car = new Car(2, 4);
  // car.drive();


  // 1번째 mixin
  function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
      if (!(key in targetObj)) {
        targetObj[key] = sourceObj[key];
      }
    }
    return targetObj;
  }

  var Vehicle = {
    engines: 1,
    ignition: function () {
      console.log("엔진을 켠다");
    },
    drive: function () {
      this.ignition();  // this?
      console.log("방향을 맞추고 앞으로 간다!");
    }
  };

  var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function () {
      Vehicle.drive.call(this); // 명시적 다형성 : this? -> targetObj 현재 객체 / 현재 drive
      Vehicle.drive();          // 상대적 다형성 : 실행은 같다 drive 에서 this의 참조가 달라진다.
      console.log(this.wheels + "개의 바퀴로 굴러간다");
    }
  });

  Car.drive();
  // Vehicle.drive();


  // 2번째 mixin
  function mixin2(sourceObj, targetObj) {
    for (var key in sourceObj) {
      targetObj[key] = sourceObj[key];
    }
    return targetObj;
  }

  var Car2 = mixin2(Vehicle, {});
  // Car2.drive();
  mixin2({
    wheels: 4,
    drive: function () {
      Vehicle.drive.call(this);
      Vehicle.drive();
      console.log(this.wheels + "개의 바퀴로 굴러간다");
    }
  }, Car2);
  Car2.drive();

  // 전통적인 자바스크립트 Class
  function VehicleF() {
    this.engines = 1;
  }

  VehicleF.prototype.ignition = function () {
    console.log("엔진을 켠다");
  };
  VehicleF.prototype.drive = function () {
    this.ignition();
    console.log("방향을 맞추고 앞으로 간다!!");
  };

  function CarF() {
    var car = new VehicleF();

    // Car 필드
    car.wheels = 4;

    // 1. VehicleF::dirve 내부 레퍼런스 저장
    var vehicleDrive = car.drive;

    // 2. 오버라이딩
    car.drive = function () {
      // vehicleDrive.call(this); // this -> VehicleF와 매핑?
      vehicleDrive.call(car); // this -> VehicleF와 매핑?
      console.log(this.wheels + "개의 바퀴로 굴러간다");
    };
    // car.drive = () => {
    //   vehicleDrive.call(this); // car or this
    //   console.log(this.wheels + "개의 바퀴로 굴러간다");
    // };
    return car;
  }

  // var myCar = new CarF();
  // var myCar = CarF(); // car함수가 반환되므로... new 를 쓰지않아도 동일한 내용 가능, 불필요한 객체생성을 줄일 수 있다 / 클로저가 생김
  // myCar.drive();


  // 암시적 믹스인
  var Something = {
    cool: function () {
      this.greeting = "Hello World, Something";
      this.count = this.count ? this.count + 1 : 1;
    }
  };

  Something.cool();
  console.log(Something.greeting);
  console.log(Something.count);

  var Another = {
    cool: function () {
      // 여기서 암시적 믹스인
      // Something.cool.call(this);
      // Something.cool();
      this.greeting = "Hello World, Another";
      this.count = this.count ? this.count + 1 : 1;
    }
  };

  Another.cool();
  console.log(Another.greeting);
  console.log(Another.count);
  console.log(Something.count);

})();