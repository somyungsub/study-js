function Computer(name) {
  this.name = name;
  this.price = 0;
  this.parts = [];
}

Computer.prototype = {
  showPrice() {
    console.log(this.name + ' total cost : ' + this.price);
  },
  showParts() {
    this.parts.forEach(part => {
      console.log(part.name + ' cost : ' + part.price);
    });
    console.log("total price : ", this.price);
  },
  decorate(part) {
    this.price += part.price;
    this.parts.push(part);
  },
}

function ComputerDecorator() {
  this.decorateParts = {};
}

ComputerDecorator.prototype.decorateComputer = function(computer, partName) {
  if (this.decorateParts.hasOwnProperty(partName)) {
    computer.decorate(this.decorateParts[partName]);
    console.log("Decorating " + computer.name + " with " + partName + " is decorated");
  }
  return computer;
}

ComputerDecorator.prototype.addDecoratePart = function(partName, price) {
  this.decorateParts[partName] = {
    name: partName,
    price
  }
}

const computerDecorator = new ComputerDecorator();
computerDecorator.addDecoratePart("CPU", 200);
computerDecorator.addDecoratePart("Memory 16GB", 1500);
computerDecorator.addDecoratePart("MainBoard ", 3500);

const computer1 = new Computer("견적1");
let decorateComputer = computerDecorator.decorateComputer(computer1, "CPU");
console.log(decorateComputer);
let decorateComputer1 = computerDecorator.decorateComputer(computer1, "Memory 16GB");
console.log(decorateComputer1);
computer1.showParts();
computer1.showPrice();