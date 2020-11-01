


// 2.3 가교 (Bridge) 관련 클래스 생성
class Sacrifice {
  getPray() {
    return "나의 기도 ~ 기도기도";
  }
}

class HumanSacrifice {
  getPray() {
    return "사람의 기도~";
  }
}

class PrayerPurposeProvider {
  getPurpose() {
    return "자바, 자바스크립트 마스터하기";
  }
}

(function () {

  // 1. 적응자 (Adapter)
  // 1.1 기존 Ship 인터페이스 (커스텀)
  var Ship = (function () {
    function Ship() {
    }

    Ship.prototype.setRudderAngleTo = function (angle) {
      console.log("방향키" + angle + "도를 돌립니다");
    };

    Ship.prototype.setSailConfiguration = function (configuration) {
      console.log(configuration + "항해를 설정 합니다");
    };

    Ship.prototype.setSailAngle = function (sailId, sailAngle) {
      console.log(sailId + "로 항해 설정, " + sailAngle + "도로 항해를 진행합니다");
    };

    Ship.prototype.getCurrentBearing = function () {
      console.log("현재 베어링 상태 확인");
      return 10;
    };

    Ship.prototype.getCurrentSpeedEstimate = function () {
      console.log("계산된 현재속도 반환하기");
      return 10;
    };

    Ship.prototype.shiftCrewWeightTo = function (weightToShift, locationId) {
      console.log(weightToShift + "무게, " + locationId + " 쉬프")
    };
    return Ship;
  })();

  // 1.2 어댑터 구현
  var ShipAdapter = (function () {
    function ShipAdapter() {
      this._ship = new Ship();
    }

    ShipAdapter.prototype.turnLeft = function () {
      this._ship.setRudderAngleTo(-30);
      this._ship.setSailAngle(3, 12);
    };

    ShipAdapter.prototype.turnRight = function () {
      this._ship.setRudderAngleTo(30);
      this._ship.setSailAngle(5, -9);
    };

    ShipAdapter.prototype.goForward = function () {
      // _ship의 또다른 일을 수행
      this._ship.getCurrentBearing();
      this._ship.getCurrentSpeedEstimate();
    };
    return ShipAdapter;
  })();

  // 1.3 새로운 인터페이스 -> js는 인터페이스가 없기 때문에 생략이 가능
  var SimpleShip = (function (adapter) {
    function SimpleShip() {
      this.adapter = adapter;
    }

    SimpleShip.prototype.turnLeft = function () {
      this.adapter.turnLeft();
    };

    SimpleShip.prototype.turnRight = function () {
      this.adapter.turnRight();
    };

    SimpleShip.prototype.goForward = function () {
      this.adapter.goForward();
    };
    return SimpleShip;
  })(new ShipAdapter());


  // 1.4 실행 -> 새로운 인터페이스 (SimpleShip) 적용
  console.log("\n**** 1.어댑터 실행 ****\n");
  var ship = new SimpleShip(SimpleShip);
  ship.turnLeft();
  ship.turnRight();
  ship.goForward();

  console.log("====================");
  var ship2 = new ShipAdapter();
  ship2.turnLeft();
  ship2.turnRight();
  ship2.goForward();


  // 2 가교 (Bridge)
  // 2.1 여러 신들
  var Religion = {};
  var OldGods = (function () {
    function OldGods() {
    }

    OldGods.prototype.prayTo = function (sacrifice) {
      console.log("We Old Gods hear your prayer" + sacrifice.getPray());
    };
    return OldGods;
  })();
  Religion.OldGods = OldGods;

  var DrownedGod = (function () {
    function DrownedGod() {
    }

    DrownedGod.prototype.prayTo = function (humanSacrifice) {
      console.log("*BUBBLE* GURGLE" + humanSacrifice.getPray());
    };
    return DrownedGod;
  })();
  Religion.DrownedGod = DrownedGod;

  var SevenGods = (function () {
    function SevenGods() {
    }

    SevenGods.prototype.prayTo = function (prayerPurpose) {
      console.log("Sorry there are a lot ~~ 나의 기도 목적 : " + prayerPurpose);
    };
    return SevenGods;
  })();
  Religion.SevenGods = SevenGods;

  // 2.2 각어댑터 구현
  var OldGodsAdapter = (function () {
    function OldGodsAdapter() {
      this._oldGods = new OldGods();
    }

    OldGodsAdapter.prototype.prayTo = function () {
      var sacrifice = new Sacrifice();
      this._oldGods.prayTo(sacrifice);
    };

    return OldGodsAdapter;
  })();
  Religion.OldGodsAdapter = OldGodsAdapter;

  var DrownedGodAdapter = (function () {
    function DrownedGodAdapter() {
      this._drownedGod = new DrownedGod();
    }

    DrownedGodAdapter.prototype.prayTo = function () {
      var sacrifice = new HumanSacrifice();
      this._drownedGod.prayTo(sacrifice);
    };
    return DrownedGodAdapter;
  })();
  Religion.DrownedGodAdapter = DrownedGodAdapter;

  var SevenGodsAdapter = (function () {
    function SevenGodsAdapter() {
      this.prayerPurposeProvider = new PrayerPurposeProvider();
      this._sevenGods = new SevenGods();
    }

    SevenGodsAdapter.prototype.prayTo = function () {
      this._sevenGods.prayTo(this.prayerPurposeProvider.getPurpose());
    };
    return SevenGodsAdapter;
  })();
  Religion.SevenGodsAdapter = SevenGodsAdapter;

  // 2.4 실행
  console.log("\n**** 2.브릿지 실행 ****\n");
  var god1 = new Religion.SevenGodsAdapter();
  var god2 = new Religion.DrownedGodAdapter();
  var god3 = new Religion.OldGodsAdapter();

  var gods = [god1, god2, god3];
  for (let i = 0; i < gods.length; i++) {
    gods[i].prayTo();
  }

  // 3 복합체 (Composite)
  // 3.1 리프노드
  var SimpleIngredient = (function () {
    function SimpleIngredient(name, calories, ironContent, vitaminCContent) {
      this.name = name;
      this.calories = calories;
      this.ironContent = ironContent;
      this.vitaminCContent = vitaminCContent;
    }

    SimpleIngredient.prototype.getName = function () {
      return this.name;
    };

    SimpleIngredient.prototype.getCalories = function () {
      return this.calories;
    };

    SimpleIngredient.prototype.getIronContent = function () {
      return this.ironContent;
    };

    SimpleIngredient.prototype.getVitaminCContent = function () {
      return this.vitaminCContent;
    };
    return SimpleIngredient;
  })();

  // 3.2 복합객체
  var CompoundIngredient = (function () {
    function CompoundIngredient(name) {
      this.name = name;
      this.ingredients = new Array();
    }

    CompoundIngredient.prototype.addIngredient = function (ingredient) {
      this.ingredients.push(ingredient);
    };

    CompoundIngredient.prototype.getName = function () {
      return this.name;
    };
    CompoundIngredient.prototype.getCalories = function () {
      var total = 0;
      for (var ingredient of this.ingredients) {
        total += ingredient.getCalories();
      }
      return total;
    };

    CompoundIngredient.prototype.getIronContent = function () {
      var total = 0;
      for (var ingredient of this.ingredients) {
        total += ingredient.getIronContent();
      }
      return total;
    };

    CompoundIngredient.prototype.getVitaminCContent = function () {
      var total = 0;
      for (var ingredient of this.ingredients) {
        total += ingredient.getVitaminCContent();
      }
      return total;
    };
    return CompoundIngredient;
  })();

  // 3.3 실행
  console.log("\n**** 3.복합체 ****\n");
  var egg = new SimpleIngredient("Egg", 155, 6, 0);
  var milk = new SimpleIngredient("Milk", 42, 0, 0);
  var sugar = new SimpleIngredient("Sugar", 387, 0, 0);
  var rice = new SimpleIngredient("Rice", 370, 8, 0);
  var ricePudding = new CompoundIngredient("Rice Pudding");
  ricePudding.addIngredient(egg);
  ricePudding.addIngredient(rice);
  ricePudding.addIngredient(milk);
  ricePudding.addIngredient(sugar);

  // 추가
  var riceMandu = new CompoundIngredient("Rice Mandu");
  riceMandu.addIngredient(new SimpleIngredient("Kimchi", 15, 5, 10));
  riceMandu.addIngredient(new SimpleIngredient("Meat", 50, 25, 62));
  riceMandu.addIngredient(new SimpleIngredient("Meal", 125, 15, 11));
  riceMandu.addIngredient(rice);

  ricePudding.addIngredient(riceMandu); // rice푸딩에  만두추가

  console.log(ricePudding.getCalories() + " calories");
  console.log(ricePudding.getIronContent() + " IronContent");

  // 4 장식자 (Decorator)
  // 4.1 베이스 갑옷
  var BasicArmor = (function () {
    function BasicArmor() {
    }

    BasicArmor.prototype.calculateDamageFromHit = function (hit) {
      return hit.Strength * 0.5;
    };

    BasicArmor.prototype.getArmorIntegrity = function () {
      return 1;
    };
    return BasicArmor;

  })();

  // 4.2 사슬메일 갑옷
  var ChainMail = (function () {
    function ChainMail(decoratedArmor) {
      this.decoratedArmor = decoratedArmor;
    }

    ChainMail.prototype.calculateDamageFromHit = function (hit) {
      hit.Strength = hit.Strength * 0.8;
      return this.decoratedArmor.calculateDamageFromHit(hit);
    };

    ChainMail.prototype.getArmorIntegrity = function () {
      return 0.9 * this.decoratedArmor.getArmorIntegrity();
    };
    return ChainMail;
  })();

  // 4.3 실행
  console.log("\n**** 4.데코레이터 ****\n");
  var armor = new ChainMail(new BasicArmor());
  console.log(armor.calculateDamageFromHit({Location: "Head", Weapon: "pennis", Strength: 12}));
  console.log(armor.calculateDamageFromHit({Location: "Arm", Weapon: "Basic", Strength: 10}));

  // 5 퍼사드
  // 5.1 배 -> 로직실행의 중심
  var Transprotation = {};
  var Ship = (function () {
    function Ship() {
    }

    Ship.prototype.turnLeft = function () {
      console.log("left");
    };

    Ship.prototype.turnRight = function () {
      console.log("right");
    };

    Ship.prototype.goForward = function () {
      console.log("goforward");
    };
    return Ship;
  })();
  Transprotation.Ship = Ship;

  // 5.2 제독
  var Admiral = (function () {
    function Admiral() {
    }

    return Admiral;
  })();
  Transprotation.Admiral = Admiral;

  // 5.3 ?
  var SupplyCoordinator = (function () {
    function SupplyCoordinator() {
    }

    return SupplyCoordinator;
  })();
  Transprotation.SupplyCoordinator = SupplyCoordinator;

  // 5.4 퍼사드
  var Fleet = (function () {
    function Fleet() {
    }

    Fleet.prototype.setDestination = function (destination) {
      // 선박에 내리는 명령
      // destination.turnLeft();
      // destination.goForward();
      console.log("목적지 세팅");
    };

    Fleet.prototype.resupply = function () {
      console.log("재 공급하기");
    };

    Fleet.prototype.attack = function (destination) {
      console.log("공격하기");
    };

    return Fleet;
  })();

  // 5.5 실행
  console.log("\n**** 5.퍼사드 ****\n")
  var facade = Object.create(Fleet.prototype);
  facade.attack();
  facade.resupply();
  facade.setDestination();

  // 6 플라이웨이트 (Flyweight)
  // 6.1 기본포맷
  var Soldier = (function () {
    function Soldier() {
      this.Health = 10;
      this.FightingAbility = 5;
      this.Hunger = 0;
    }

    return Soldier;
  })();

  // 6.2 prototype을 이용 -> 플라이웨이트 (동일한 객체는 공유해서 사용)
  var Soldier2 = (function () {
    function Soldier2() {
    }

    Soldier2.prototype.Health = 10;
    Soldier2.prototype.FightingAbility = 5;
    Soldier2.prototype.Hunger = 0;
    return Soldier2;
  })();

  // 6.3 실행
  console.log("\n**** 6.플라이웨이트 ****\n");
  var soldier1 = new Soldier();
  var soldier2 = new Soldier();

  console.log(soldier1.Health); // 10
  console.log(soldier2.Health); // 10
  soldier1.Health = 7;
  console.log(soldier1.Health); // 7
  console.log(soldier2.Health); // 10
  delete soldier1.Health;

  console.log(soldier1.Health); // undefined
  console.log(soldier2.Health); // 10

  console.log("========================");
  var soldier11 = new Soldier2();
  var soldier22 = new Soldier2();

  console.log(soldier11.Health); // 10
  console.log(soldier22.Health); // 10
  soldier11.Health = 7; // Health는 새롭게 할당됨
  console.log(soldier11.Health); // 7
  console.log(soldier22.Health); // 10

  delete soldier11.Health;  // 새롭게 할당된 Health가 삭제됨

  console.log(soldier11.Health); // 10
  console.log(soldier22.Health); // 10

  // 7 프록시(Proxy)
  // 7.1 객체기반으로
  var BarrelCalculator = {
    calculateNumberNeeded: function (volume) {
      return Math.ceil(volume / 357);
    }
  };

  var DragonBarrelCalculator = {
    calculateNumberNeeded: function (volume) {
      if (this._barrelCalculator == null) {
        this._barrelCalculator = Object.create(BarrelCalculator);
      }
      return this._barrelCalculator.calculateNumberNeeded(volume * 0.77);
    }
  };

  // 7.2 함수기반 (책)
  var Barrel = (function () {
    function Barrel() {
    }

    Barrel.prototype.calculateNumberNeeded = function (volume) {
      return Math.ceil(volume / 357);
    };
    return Barrel;
  })();

  var DragonBarrel = (function () {
    function DragonBarrel() {
    }
    DragonBarrel.prototype.calculateNumberNeeded = function (volume) {
      if (this._barrelCalculator == null) {
        this._barrelCalculator = new Barrel();
      }
      return this._barrelCalculator.calculateNumberNeeded(volume * 0.77);
    };
    return DragonBarrel;
  })();

  // 7.3 실행
  console.log("\n**** 7.프록시 ****\n");
  console.log(BarrelCalculator.calculateNumberNeeded(150000));
  console.log(DragonBarrelCalculator.calculateNumberNeeded(150000));

  var barrel = new Barrel();
  var dragon = new DragonBarrel();
  console.log(barrel.calculateNumberNeeded(150000));
  console.log(dragon.calculateNumberNeeded(150000));




})();