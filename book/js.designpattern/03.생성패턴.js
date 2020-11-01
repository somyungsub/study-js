(function () {
  var Westeros;
  (function (Westeros) {
    var Ruler = (function () {
      function Ruler() {
        this.house = new Westeros.Houses.Targaryen();
      }
      return Ruler;
    })();
    Westeros.Ruler = Ruler;

    // Wall 싱글톤 구현
    var Wall = (function () {
      function Wall() {
        this.height = 0;
        if (Wall._instance) {
          return Wall._instance;
        }
        Wall._instance = this;
      }

      Wall.prototype.setHeight = function (height) {
        this.height = height;
      };
      Wall.prototype.getStatus = function () {
        console.log("Wall is " + this.height + " meters tall");
      };
      Wall.getInstance = function () {
        if (!Wall._instance) {
          Wall._instance = new Wall();
        }
        return Wall._instance;
      };
      Wall._instance = null;
      return Wall;
    })();
    Westeros.Wall = Wall;

  })(Westeros || (Westeros = {}));


  // 1 추상팩토리

  // 1.1 King 클래스 구현 -> 실제는 클래스가 아니라 함수기반
  var KingJoffery = (function () {

    function KingJoffery() {
    }

    KingJoffery.prototype.makeDecision = function () {
      console.log("KingJoffery makeDecision call..");
    };

    KingJoffery.prototype.marry = function () {
      console.log("KingJoffery marry call..");
    };

    return KingJoffery;
  })();

  // 1.2 HandOfTheKing
  var LordTywin = (function () {
    function LordTywin() {
    }

    LordTywin.prototype.makeDecision = function () {
      console.log("LordTywin, makeDecision call");
    };

    return LordTywin;
  })();

  // 1.3 구체 팩토리
  var LannisterFactory = (function () {
    function LannisterFactory() {
    }

    LannisterFactory.prototype.getKing = function () {
      return new KingJoffery();
    };

    LannisterFactory.prototype.getHandOfTheKing = function () {
      return new LordTywin();
    };
    return LannisterFactory;
  })();

  var KingAerys = (function () {
    function KingAerys() {
    }

    KingAerys.prototype.makeDecision = function () {
      console.log("KingAerys, makeDecision call..");
    };

    KingAerys.prototype.marry = function () {
      console.log("KingAerys, marry call..");
    };
    return KingAerys;
  })();

  var LordConnington = (function () {
    function LordConnington() {
    }

    LordConnington.prototype.makeDecision = function () {
      console.log("LordConnington, makeDecision call");
    };
    return LordConnington;
  })();

  // 1.4 다른 지배가문 구체 팩토리
  var TargaryenFactory = (function () {
    function TargaryenFactory() {
    }

    TargaryenFactory.prototype.getKing = function () {
      return new KingAerys(); // 현재없다
    };

    TargaryenFactory.prototype.getHandOfTheKing = function () {
      return new LordConnington();  // 현재없
    };
    return TargaryenFactory;

  })();

  // 1.5 지배 가문을 필요로 하는 클래스
  var CourtSession = (function () {
    function CourtSession(abstractFactory) {
      this.abstractFactory = abstractFactory;
      this.COMPLAINT_THRESHOLD = 10;
    }

    CourtSession.prototype.complaintPresented = function (complaint) {
      if (complaint.severity < this.COMPLAINT_THRESHOLD) {
        this.abstractFactory.getHandOfTheKing().makeDecision();
      } else {
        this.abstractFactory.getKing().makeDecision();
      }
    };
    return CourtSession;
  })();

  // 1.6 실행
  console.log("\n**** 1.추상팩토리 실행 ****\n");
  var courtSeesion1 = new CourtSession(new TargaryenFactory());
  courtSeesion1.complaintPresented({severity: 8});
  courtSeesion1.complaintPresented({severity: 12});


  var courtSeesion2 = new CourtSession(new LannisterFactory());
  courtSeesion2.complaintPresented({severity: 8});
  courtSeesion2.complaintPresented({severity: 12});

  // 2. 빌더패턴

  // 2.1 이벤트
  var Event = (function () {
    function Event(name) {
      this.name = name;
    }

    return Event;
  })();
  Westeros.Event = Event;

  // 2.2 포상
  var Prize = (function () {
    function Prize(name) {
      this.name = name;
    }

    return Prize;
  })();
  Westeros.Prize = Prize;

  // 2.3 참석자
  var Attendee = (function () {
    function Attendee(name) {
      this.name = name;
    }

    return Attendee;
  })();
  Westeros.Attendee = Attendee;

  // 2.4 토너먼트
  var Tournament = (function () {
    function Tournament() {
      this.events = [];
      this.attendees = [];
      this.prizes = [];
    }

    return Tournament;
  })();
  Westeros.Tournament = Tournament;

  // 2.5 서로다른 토너먼트를 생성하는 두개 빌더
  var LannisterTournamentBuilder = (function () {
    function LannisterTournamentBuilder() {
    }

    LannisterTournamentBuilder.prototype.build = function () {
      var tournament = new Tournament();
      tournament.events.push(new Event("Joust"));
      tournament.events.push(new Event("Melee"));

      tournament.attendees.push(new Attendee("Jamie"));

      tournament.prizes.push(new Prize("Gold"));
      tournament.prizes.push(new Prize("More Gold"));

      return tournament;
    };
    return LannisterTournamentBuilder;
  })();
  Westeros.LannisterTournamentBuilder = LannisterTournamentBuilder;

  var BaratheonTournamentBuilder = (function () {
    function BaratheonTournamentBuilder() {
    }

    BaratheonTournamentBuilder.prototype.build = function () {
      var tournament = new Tournament();
      tournament.events.push(new Event("Joust"));
      tournament.events.push(new Event("Melee"));

      tournament.attendees.push(new Attendee("Stannis"));
      tournament.attendees.push(new Attendee("Robert"));
      return tournament;
    };

    return BaratheonTournamentBuilder;
  })();
  Westeros.BaratheonTournamentBuilder = BaratheonTournamentBuilder;

  // 2.6 단순 실행 컨텍스트
  var TournamentBuilder = (function () {
    function TournamentBuilder() {
    }

    // 빌더를 매개변수로 받아서 처리하는 부분
    TournamentBuilder.prototype.build = function (builder) {
      return builder.build(); // 빌더의 build 함수 실행
    };
    return TournamentBuilder;
  })();
  Westeros.TournamentBuilder = TournamentBuilder;

  // 추가
  var CalorieBuilder = (function () {
    function f() {
      this.obj = {};
    }

    // 지방 칼로리 세팅
    f.prototype.fatBuild = function (calorie) {
      this.obj.fatCalorie = calorie;
      return this;
    };

    // 단백질 카로리 세팅
    f.prototype.proteinBuild = function (calorie) {
      this.obj.proteinCalorie = calorie;
      return this;
    };

    f.prototype.build = function () {
      return this;
    };
    return f;
  })();


  // 2.7 실행
  console.log("\n**** 2.빌더 실행 ****\n");
  console.log(BaratheonTournamentBuilder.prototype.build());
  console.log(LannisterTournamentBuilder.prototype.build());

  console.log("===========================");

  console.log(Westeros.TournamentBuilder.prototype.build(new BaratheonTournamentBuilder()));
  console.log(Westeros.TournamentBuilder.prototype.build(new LannisterTournamentBuilder()));

  // 추가
  console.log(Westeros.TournamentBuilder.prototype.build(new CalorieBuilder().fatBuild(15).proteinBuild(20)));


  // 3. 팩토리메서드
  // 3.1 세종류의 종교 God
  var Religion = {}; // 종교 전역
  var WateryGod = (function () {
    function WateryGod() {
    }

    WateryGod.prototype.prayTo = function () {
      console.log("WateryGod, Pray To ~");
    };

    WateryGod.prototype.setName = function (name) {
      this.name = name;
    };

    WateryGod.prototype.getName = function () {
      return this.name;
    };

    return WateryGod;
  })();
  Religion.WateryGod = WateryGod;

  var AncientGod = (function () {
    function AncientGod() {
    }

    AncientGod.prototype.prayTo = function () {
      console.log("AncientGods, Pray To");
    };

    return AncientGod;
  })();
  Religion.AncientGods = AncientGod;

  var DefaultGod = (function () {
    function DefaultGod() {
    }

    DefaultGod.prototype.prayTo = function () {
      console.log("DefaultGod, Pray To ");
    };

    return DefaultGod;
  })();
  Religion.DefaultGod = DefaultGod;

  // 3.2 각 God 생성을 위한 팩토리
  var GodFactory = (function () {
    function GodFactory() {
    }

    // prototype이 필요없는 이유는?
    GodFactory.Build = function (godName) {
      if (godName === 'watery') {
        return new WateryGod();
      } else if (godName === 'ancient') {
        return new AncientGod();
      } else {
        return new DefaultGod();
      }
    };
    return GodFactory;
  })();

  // 3.3 종교, 기도의목적에 따른 분류
  var GodDeterminant = (function () {
    function GodDeterminant(religionName, prayPurpose) {
      this.religionName = religionName;
      this.prayPurpose = prayPurpose;
    }

    return GodDeterminant;
  })();

  // 3.4 실행
  var Prayer = (function () {
    function Prayer() {
    }

    Prayer.prototype.pray = function (godName) {
      GodFactory.Build(godName).prayTo();
    };

    // 추가
    Prayer.prototype.getInstance = function (godName) {
      return GodFactory.Build(godName);
    };

    return Prayer;
  })();

  console.log("\n**** 3.팩토리메서드 실행 ****\n");
  Prayer.prototype.pray("watery");
  Prayer.prototype.pray("ancient");
  Prayer.prototype.pray("asd");

  // 4. 싱글톤
  // 4.1
  // 위에 Westeros.Wall 구현 (장벽)

  // 4.2 실행
  console.log("\n**** 4.싱글톤 실행 ****\n");
  var instance1 = Westeros.Wall.getInstance();
  instance1.setHeight(20);
  console.log(instance1);
  instance1.getStatus();

  var instance2 = Westeros.Wall.getInstance();
  instance2.setHeight(20 * 2);
  console.log(instance1); // 40
  console.log(instance2); // 40
  instance1.getStatus();
  instance2.getStatus();

  var watery = Prayer.prototype.getInstance("watery");
  var watery2 = Prayer.prototype.getInstance("watery");
  watery.setName("테스트 ~!");
  console.log(watery.getName());
  console.log(watery2.getName());

  // 추가

  var Singleton = (function () {
    this.instance = null;
    this.name2 = "";
    function Singleton() {
    }

    Singleton.getInstance = function () {
      if (!this.instance) {
        this.instance = Object.create(this);
      }
      return this.instance;
    };

    Singleton.test = function () {
      console.log(this.name2);
    };

    return Singleton;
  })();

  console.log(Singleton);

  var single1 = Singleton.getInstance();
  var single2 = Singleton.getInstance();
  single1.name2 = "테스트";
  console.log(single1);
  console.log(single2);
  single1.test();
  single2.test();

  single2.name2 = "테스트2";
  console.log(single1);
  console.log(single2);
  single1.test();
  single2.test();

  console.log("==============");
  var single3 = new Singleton();
  single3.name2 = "test";
  console.log(single1); // name2 : '테스트2' -> function
  console.log(single2); // name2 : '테스트2' -> function
  console.log(single3); // name2 : 'test'   -> Singleton

  // 5 프로토타입
  // 5.1 구현
  var Westeros2;
  (function (Westeros2) {
    (function (Families) {
      var Lannister = (function () {
        function Lannister() {
        }

        Lannister.prototype.clone = function () {
          var clone = new Lannister();
          for (var atter in this) {
            clone[atter] = this[atter]; // 현재 객체의 모든 속성을 복사 :  TODO -> (깊은,얕은복사)
          }
          return clone;
        };
        return Lannister;
      })();
      Families.Lannister = Lannister;
    })(Westeros2.Families || (Westeros2.Families = {}));
    var Families = Westeros2.Families;
  })(Westeros2 || (Westeros2 = {}));

  var jamie = new Westeros2.Families.Lannister();
  // var jamie = Object.create(new Westeros2.Families.Lannister());
  jamie.swordSkills = 9;
  jamie.charm = 6;
  jamie.wealth = 10;
  console.log(jamie);

  var tyrion = jamie.clone();
  console.log(jamie);
  console.log(tyrion);
  tyrion.charm = 10;

  console.log(jamie);
  console.log(tyrion);



}());