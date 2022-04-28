// //Classes
// //Classes are blueprint of an Object. A class can have many Object,
// // because class is a template while Object are instances of the class or the concrete implementation.
// //Even the classes provided by ECMA2015 are objects.

// // // Defining class in a Traditional Way.
function Bikes(name,maker,engine){
    this.name = name,
    this.maker = maker,
    this.engine = engine
};
 
Bikes.prototype.getDetails = function(){
    console.log('The name of the bike is '+ this.name);
}
 
let bike11 = new Bikes('Hayabusa','Suzuki','1340cc');
let bike22 = new Bikes('Ninja','Kawasaki','998cc');
 
console.log(bike11.name);
console.log(bike22.maker);
console.log(bike11.getDetails());

// //defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails(){
      return(`the name of the bike is ${this.name} made by ${this.maker} engine  ${this.engine}`)
  }
}
// // making object with the help of the constructor

let bike1 = new Vehicle('hayabusa', 'suzki', '1340cc');
let bike2 = new Vehicle('ninja', 'kawasaki', '998cc');

console.log(bike1.name);
console.log(bike1.name);
console.log(bike2.getDetails());