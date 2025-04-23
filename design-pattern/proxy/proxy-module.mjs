export function wrap(func, wrapper) {
  return function() {
    const args = [func].concat(Array.prototype.slice.call(arguments));
    return wrapper.apply(this, args);
  }
}

export function wrapObject(obj, wrapper) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
      obj[key] = wrap(obj[key], wrapper);
    }
  }
}

export const Car = {
  beep() {
    console.log("call >> beep!!!!");
  },
  bark() {
    console.log("call >> bark!!!!");
  },
  accelerate() {
    console.log("call >> accelerate!!!!");
  }
};

export function monitorTool() {
  const funcSeqs = [];
  decorate('before', function (func) {
    console.log(`${func.name} started :: ${Date.now()}`);
  });

  decorate('apply', function (func) {
    func.apply(this, Array.prototype.slice.call(arguments, 1));
  });
  decorate('after', function (func) {
    console.log(`${func.name} finished :: ${Date.now()}`);
  });

  function decorate(name,func) {
    funcSeqs.push({
      name,
      func
    });
  }

  function monitor() {
    funcSeqs.forEach((funcSeq) => {
      funcSeq.func.apply(this, arguments);
    })
  }

  return {
    decorate,
    monitor
  }
}

