// Оголошення конструктора для Device
function Device(name) {
  this.name = name;
}

// Додавання методу on до прототипу Device
Device.prototype.on = function (callback) {
  setTimeout(() => {
    console.log(`${this.name} turned on.`);
    callback(); // Виклик функції зворотного виклику після ввімкнення
  }, 1000); // Затримка 1 секунда для емуляції асинхронності
};

// Оголошення методу off для Device
Device.prototype.off = function (callback) {
  setTimeout(() => {
    console.log(`${this.name} turned off.`);
    callback(); // Виклик функції зворотного виклику після вимкнення
  }, 1000); // Затримка 1 секунда для емуляції асинхронності
};

// Конструктор для SmartHouse
function SmartHouse(name) {
  this.name = name;
  this.devices = [];
}

// Додавання методу addDevice до прототипу SmartHouse
SmartHouse.prototype.addDevice = function (device) {
  this.devices.push(device);
  console.log(`${device.name} added to ${this.name}.`);
};

// Додавання методу getDevices до прототипу SmartHouse
SmartHouse.prototype.getDevices = function () {
  return this.devices;
};

// Додавання методу getDeviceByName до прототипу SmartHouse
SmartHouse.prototype.getDeviceByName = function (name) {
  return this.devices.find(device => device.name === name) || null;
};

// Додавання методу offAllDevice до прототипу SmartHouse
SmartHouse.prototype.offAllDevice = function (callback) {
  const promises = this.devices.map(device => {
    return new Promise((resolve) => {
      device.off(resolve); // Виклик функції зворотного виклику після вимкнення
    });
  });

  Promise.all(promises).then(() => {
    console.log(`${this.name} all devices turned off.`);
    callback(); // Виклик функції зворотного виклику після вимкнення всіх пристроїв
  });
};

// Оголошення конструктора для Lamp, який успадковує властивості від Device
function Lamp(name) {
  Device.call(this, name);
}

// Наслідування від Device для Lamp
Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

// Оголошення конструктора для Blinds, який успадковує властивості від Device
function Blinds(name) {
  Device.call(this, name);
}

// Наслідування від Device для Blinds
Blinds.prototype = Object.create(Device.prototype);
Blinds.prototype.constructor = Blinds;

// Оголошення конструктора для Alarm, який успадковує властивості від Device
function Alarm(name, code) {
  Device.call(this, name);
  this.code = code;
}

// Наслідування від Device для Alarm
Alarm.prototype = Object.create(Device.prototype);
Alarm.prototype.constructor = Alarm;

// Додавання методу setCode до прототипу Alarm
Alarm.prototype.setCode = function (newCode) {
  this.code = newCode;
  console.log(`${this.name} code has been updated.`);
};

// Оголошення конструктора для SmartThermostat, який успадковує властивості від Device
function SmartThermostat(name) {
  Device.call(this, name);
  this.temperature = 20;
}

// Наслідування від Device для SmartThermostat
SmartThermostat.prototype = Object.create(Device.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

// Додавання методів для збільшення та зменшення температури до прототипу SmartThermostat
SmartThermostat.prototype.increaseTemperature = function () {
  this.temperature++;
  console.log(`${this.name} temperature increased to ${this.temperature}°C.`);
};

SmartThermostat.prototype.decreaseTemperature = function () {
  this.temperature--;
  console.log(`${this.name} temperature decreased to ${this.temperature}°C.`);
};

// Демонстрація роботи
var sh = new SmartHouse("MyHouse");

sh.addDevice(new Lamp("LivingRoomLamp"));
sh.addDevice(new Blinds("BedroomBlinds"));
sh.addDevice(new Alarm("MainDoorAlarm", "1234"));
sh.addDevice(new SmartThermostat("LivingRoomThermostat"));

console.log(sh.getDevices());

// Приклад використання асинхронного методу
sh.offAllDevice(() => {
  // Цей код виконається після вимкнення всіх пристроїв
  console.log("All devices are off. Ready for the next action.");
});
