// //encapsulation
// // we group realated variables and functions that oprate on them into objects this is encapsulation  items.
// // example

// // basic way writing code before oop
// // this is also called procedure code.
// // on of the symtoms of procedure code is that it has so manay parameters

var basesalary = 30000;
var overTime = 10;
var rate = 20;

function getWage(basesalary, overTime, rate){
    return basesalary + (overTime * rate);
}

// //oop way
// // in encapsulation implementation we dont have parameters
// // all the parameters are actually  model as properties of the object .
// // the fewer number of parameter the easer it is use and maintain the function.

// let employee ={
//     basesalary:30000,
//     overTime:10,
//     rate:20,
//     getWage: function(){
//         return this.basesalary+(this.overTime * this.rate)
//     }
// }
// employee.getWage();
// console.log(employee.getWage());
