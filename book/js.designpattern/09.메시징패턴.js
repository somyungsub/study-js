(function () {

  // 요청 응답 패턴
  // 중간자
  var CrowMailBus = (function () {
    function CrowMailBus(requestor) {
      this.requestor = requestor;
      this.responder = new CrowMailResponder(this);
    }

    CrowMailBus.prototype.send = function (message) {
      var _this = this;
      if (message._from == 'requestor') {
        this.responder.processMessage(message);
      } else {
        this.requestor.processMessage(message);
      }

      // 웹워커와의 통신형태
      // if (message._from == 'requestor') {
      //   process.nextTick(function () {
      //     return _this.responder.processMessage(message);
      //   });
      // } else {
      //   process.nextTick(function () {
      //     return _this.requestor.processMessage(message);
      //   });
      // }
    };

    CrowMailBus.prototype.subscribe = function (messageName, subscriber) {
      this.responders.push({messageName: messageName, subscriber: subscriber});
    };

    CrowMailBus.prototype.publish = function (message) {
      for (let i = 0; i < this.responders.length; i++) {
        // 메시지를 등록한
        if (this.responders[i].messageName == message._messageName) {
          (function (b) {
            process.nextTick(function () {
              return b.subscriber.processMessage(message);
            });
          })(this.responders[i]);
        }
      }


    };
    return CrowMailBus;
  })();

  // 요청
  var CrowMailRequestor = (function () {
    function CrowMailRequestor() {
    }

    CrowMailRequestor.prototype.request = function () {
      var message = {
        _messageDate: new Date(),
        _from: "requestor",
        _corrolationId: "Aaa",
        body: "Invade Moat Cailin"
      };

      // return message;
      var bus = new CrowMailBus(this);
      bus.send(message);
    };

    CrowMailRequestor.prototype.processMessage = function (message) {
      console.dir(message);
    };
    return CrowMailRequestor;
  })();

  // 응답
  var CrowMailResponder = (function () {
    function CrowMailResponder(bus) {
      this.bus = bus;
    }

    CrowMailResponder.prototype.processMessage = function (message) {
      var response = {
        _messageDate: new Date(),
        _from: "responder",
        _corrolationId: message._corrolationId,
        body: "Okey, invaded"
      };
      this.bus.send(response);
    };
    return CrowMailResponder;
  })();

  var requestor = new CrowMailRequestor();
  var bus = new CrowMailBus(requestor);
  var responder = new CrowMailResponder(bus);
  requestor.request("request Send");
  requestor.request("request Send");

  // bus.send(requestor.request("requestSent"));
  // responder.processMessage("reply snet");


  var name = "aaa";
  var s = `this is aa ${name}`;

  console.log(s);

  function timeout(ms) {
    return new Promise((resolve => {
      setTimeout(resolve, ms);
    }));
  }

  async function asyncValue(value) {
    await timeout(1500);
    return value;
  }

  (async function () {
    console.log("Start");
    var valuePromise = asyncValue(42).catch(console.error.bind(console));
    console.log("Task is running in the background");
    console.log("Awaiting the promise");
    var value = await valuePromise;
    console.log("Promise resolved");
    console.log(value);

    console.log("Start");
    var valuePromise = asyncValue(42).catch(console.error.bind(console));
    console.log("Task is running in the background");
    console.log("Awaiting the promise");
    var value = await valuePromise;
    console.log("Promise resolved");
    console.log(value);

    console.log("===================");
    for (let i = 0; i < 5; i++) {
      console.log("Start");
      var valuePromise = asyncValue(42).catch(console.error.bind(console));
      console.log("Task is running in the background");
      console.log("Awaiting the promise");
      var value = await valuePromise;
      console.log("Promise resolved");
      console.log(value);
    }

  })();

})();

