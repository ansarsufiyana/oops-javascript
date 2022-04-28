// //what is oops
// // in object-oriented programming we combine the group of functions to single unit, we call this unit an object.
// //object oriented programming is way of writing code that allows you to create different objects from a common object .
// //The common object is usually called blueprint while the created objects are called instances.
// //Each instance has properties that are not shared other properties.

// // why we use oop
// //it also provides easy ways to creating prototypes and organize related data.
// //true OOP languages do not perform prototyping in the background just it take note of that

// // benefits of oop

// //encapsulation
// // we group realated variables and functions that oprate on them into objects this way we can reduce complexity .
// // Reduce complexity + increase reusability
// // example

// // basic way writing code before oop
// // this is also called procedure code.
// // on of the symtoms of procedure code is that it has so manay parameters

// var basesalary = 30000;
// var overTime = 10;
// var rate = 20;

// function getWage(basesalary, overTime, rate){
//     return basesalary + (overTime * rate);
// }

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


// // abstration
// // Abstraction is the concept of object-oriented programming that "shows" only essential attributes and "hides" unnecessary information. 
// // The main purpose of abstraction is hiding the unnecessary details from the users
// //we hide the unnecessary details and the complexity and the show the necessary details
// //Exposing necessary features of a class without explaining much or details is done by Abstraction.

// // inheritance
// // It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
// // helps us eleminate radundant code that has been executed but has no external effect.

// // polymorphism
// // is a technique that allows us to get rid of long if else and switch case statments
// //Refactor ugly switch/case statement

