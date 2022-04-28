// //objects
// // Object– An Object is a unique entity that contains property and methods.

// // creating a object with object literal

// //defining object
// let person = {
//   fname: "anssr",
//   lname: "ali",

//   // method
//   getFunction: function () {
//     return `the name of the person is ${person.fname} ${person.lname}`;
//   },
// };
// console.log(person.getFunction());

// // using an object constructor

// function person(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// }

// let person1 = new person("mubeen", "khan");
// let person2 = new person("danish", "karem");

// console.log(person1.fname);


// // using object.create() method

let coder ={
    isStuding: false,
    intro: function(){
        console.log(`my name is ${this.name}. am i studing? : ${this.isStuding}.`);
    }
}
 // //object.create() method
let me = Object.create(coder)
// // seting 'name' property on me 
me .name = 'mohabat khan';
// //inherited property can bi overwritten
me.isStuding = true;
me.intro();