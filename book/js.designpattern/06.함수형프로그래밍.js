(function () {
  // 1  함수젇날
  // 해밀턴투어
  var HamiltonianTour = (function () {
    function HamiltonianTour(options) {
      this.options = options;
    }

    HamiltonianTour.prototype.startTour = function () {
      if (this.options.onTourStart && typeof (this.options.onTourStart) === 'function') {
        this.options.onTourStart();
        this.visitAttraction("King's Landing");
        this.visitAttraction("Winterfell");
        this.visitAttraction("Eyrie");

        if (this.options.onTourCompletion && typeof (this.options.onTourCompletion) === 'function') {
          this.options.onTourCompletion();
        }
      }
    };

    HamiltonianTour.prototype.visitAttraction = function (attractionName) {
      if (this.options.onEntryToAttraction && typeof (this.options.onEntryToAttraction) === 'function') {
        this.options.onEntryToAttraction(attractionName);
      }

      // 관광명소에서 하는 일
      if (this.options.onExitFromAttraction && typeof (this.options.onExitFromAttraction) === 'function') {
        this.options.onExitFromAttraction(attractionName);
      }
    };

    return HamiltonianTour;
  })();

  console.log("\n**** 1. 함수전달 ****\n");
  var tour = new HamiltonianTour({
    onEntryToAttraction: function (cityName) {
      console.log("I'm delighted to be in ~ " + cityName);
    },
    onTourStart: function () {

    }
  });
  tour.startTour();

  // 2. 필터와 파이프
  Array.prototype.where = function (inclusionTest) {
    var results = [];
    for (let i = 0; i < this.length; i++) {
      if (inclusionTest(this[i])) {
        results.push(this[i]);
      }
    }
    return results;
  };

  console.log("\n**** 2. 필터와 파이프 ****\n");

  // where (필터링)
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(
    items
    .where(function (thing) {
      return thing % 2 == 0;
    })
    .where(function (thing) {
      return thing % 3 == 0;
    })
  );

  // select (get)
  Array.prototype.select = function (projection) {
    var results = [];
    for (let i = 0; i < this.length; i++) {
      results.push(projection(this[i]));
    }
    return results;
  };

  var children = [
    {id: 1, name: "Rob"},
    {id: 2, name: "Hang"},
    {id: 3, name: "so"},
    {id: 4, name: "Lee"},
    {id: 5, name: "yoon"}
  ];

  var filteredChildren = children
  .where(function (x) {
    return x.id % 2 == 0;
  })
  .select(function (x) {
    return x.name;
  });
  console.log(filteredChildren);

  // 3. 어큐뮬레이터
  var passants = [
    {name: "Jory Cassel", taxesOwed: 11, bankBalance: 50},
    {name: "Vardis Egen", taxesOwed: 15, bankBalance: 20}
  ];

  function TaxCollector() {
  }

  TaxCollector.prototype.collect = function (items, value, projection) {
    if (items.length > 1) {
      return projection(items[0]) + this.collect(items.slice(1), value, projection);
    }
    return projection(items[0]);
  };

  // 실행
  console.log(
    TaxCollector.prototype.collect(passants, -100, function (item) {
        return Math.min(item.taxesOwed, item.bankBalance);
      }
    )
  );  // 11 + 15 = 26


})();
