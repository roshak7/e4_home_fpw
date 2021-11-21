const Device = function (amperes, volts, price) {
    this.powered = false;
    this.amperes = amperes;
    this.volts = volts;
    this.price = price;
}

Device.prototype.powerOn = function () {
    this.powered = true;
}
Device.prototype.powerOff = function () {
    this.powered = false;
}
Device.prototype.getPower = function () {
    let power = this.amperes * this.volts;
    console.log(`Мощность этого устройства: ${power}`);
}
Device.prototype.getPrice = function () {
    console.log(`Цена: ${this.price}`);
}


const Computer = function(amperes, volts, price, processorType, cpuFrequency, ram, hardDrive, videoCard) {
    this.amperes = amperes;
    this.volts = volts;
    this.price = price;
    this.processorType = processorType;
    this.cpuFrequency = cpuFrequency;
    this.ram = ram;
    this.hardDrive = hardDrive;
    this.videoCard = videoCard;
 }

Computer.prototype = new Device();

Computer.prototype.getName = function () {
    return `Computer ${this.processorType}/${this.cpuFrequency}Mhz/RAM ${this.ram}/HDD ${this.hardDrive}/VideoCard ${this.videoCard}`;
}

const Lamp = function (amperes, volts, price, type, style, numberOfBulbs, color){
    this.amperes = amperes;
    this.volts = volts;
    this.price = price;
    this.type = type;
    this.style = style;
    this.numberOfBulbs = numberOfBulbs;
    this.color = color;
    this.price = price;
}

Lamp.prototype = new Device();

Lamp.prototype.getName = function () {
    return `Lamp ${this.type}, style: ${this.style}, number of bulbs: ${this.numberOfBulbs}, color: ${this.color}`;
}

let computer1 = new Computer(3,220,1200,'Intel',1500,16000,500,'nVidia 1060Ti');
let computer2 = new Computer(4,220,30000,'Intel Xeon',3200,64000,12000,'intel');
let lamp1 = new Lamp(1,220,70,'tabletop','modern',1,'brown');
let lamp2 = new Lamp(2,220,170,'ceiling','modern',6,'white');

console.log(computer1.getName());
computer1.powerOn();
if (computer1.powered) {
    console.log(computer1.getName()+' powered on');
}else {
    computer1.getName();
    console.log(computer1.getName()+' powered off');
}
computer1.getPower();
computer1.getPrice();

console.log('-----------------------------------------------------------------------------');

console.log(computer2.getName());
if (computer2.powered) {
    console.log(computer2.getName()+' powered on');
}else {
    console.log(computer2.getName()+' powered off');
}
computer2.getPower();
computer2.getPrice();

console.log('-----------------------------------------------------------------------------');

console.log(lamp2.getName());
lamp2.powerOn();
if (lamp2.powered) {
    console.log(lamp2.getName()+' powered on');
}else {

    console.log(lamp2.getName()+' powered off');
}
lamp2.powerOff();
if (lamp2.powered) {
    console.log(lamp2.getName()+' powered on');
}else {
    console.log(lamp2.getName()+' powered off');
}
lamp2.getPower();
lamp2.getPrice();

console.log('-----------------------------------------------------------------------------');

console.log(lamp1.getName());
lamp1.powerOn();
if (lamp1.powered) {
    console.log(lamp1.getName()+' powered on');
}else {
    console.log(lamp1.getName()+' powered off');
}
lamp1.powerOff();
if (lamp1.powered) {
    console.log(lamp1.getName()+' powered on');
}else {
    console.log(lamp1.getName()+' powered off');
}
lamp1.getPower();
lamp1.getPrice();