(function () {

  // 모듈
  var Westeros;
  (function (Westeros) {
    (function (Structures) {
      var Castle = (function () {
        function Castle(name) {
          this.name = name;
        }

        Castle.prototype.Build = function () {
          console.log("Castle built : " + this.name);
        };
        return Castle;
      })();
      Structures.Castle = Castle;
    })(Westeros.Castle || (Westeros.Structures = {}));
    var Structures = Westeros.Structures;
  })(Westeros || (Westeros = {}));

  console.log(Westeros);

  // 복수 클래스 정의

  var Westreos2;
  (function (Westeros2) {
    (function (Structures) {
      var Castle = (function () {
        function Castle(name) {
          this.name = name;
        }

        Castle.prototype.Build = function () {
          console.log("Castle built : " + this.name);
          var w = new Wall();
        };
        return Castle;
      })();
      Structures.Castle = Castle;
      var Wall = (function () {
        function Wall() {
          console.log("Wall construdted");
        }

        return Wall;
      })();

      Structures.Wall = Wall;
    })(Westreos2.Structures || (Westreos2.Structures = {}));
    var Structures = Westeros2.Structures;
  })(Westreos2 || (Westreos2 = {}));

  console.log(Westreos2);

})();

// import westros from 'Westeros';
// module JSON from 'http://json.org/modules/json2.js';