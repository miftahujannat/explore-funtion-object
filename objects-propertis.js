var computer = {
    price: 29000,
    storage: '156gb',
    colour: 'silver',
    processore: 'intel i5' 
}

// console.log(computer);
// console.log(computer.processore);
var computerprice = computer.price;
// set a object property value 
computer.price = 22000;
// console.log(computer);
// console.log(computerprice);

// diffrent way to set a value of an object property
var priceproperty = "price";

computer.price = 22000;
computer["price"] = 23000;
computer[priceproperty] = 19000;

// console.log(computer);

var storageproperty = 'storage';
computer[storageproperty] = '512';
computer["storage"] = '676';
computer.storage = '511';

console.log(computer);