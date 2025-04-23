import {Car, monitorTool, wrapObject} from "./proxy-module.mjs";


console.log("monitorTool : ", monitorTool);
const tool = monitorTool();
const wrapperFunction = tool.monitor;
const testCar = {...Car};
wrapObject(testCar, wrapperFunction);

console.log("======accelerate");
testCar.accelerate();
console.log("======bark");
testCar.bark();
console.log("======beep");
testCar.beep();

