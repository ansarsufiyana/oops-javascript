// //NEW THING I HAVE STUDY IN JAVASCRIPT


// //1.EVENT LOOPING

// //The event loop is a constantly running process that monitors both the callback queue and the call stack.
// //A browser tab runs in a single thread–an event loop. This loop continuously picks messages
//  //from the message queue and executes the callbacks associated with them. The event loop
//  //simply keeps picking tasks from the message queues while other processes add tasks to the
// // message queue. Other processes such as timers and event handlers run in parallel and keep
//  //adding tasks to the queue.


// //2.MUTATING AND IMMUTATING

// // immutables
// //A variable declared with the const keyword
// //creates a read-only reference to a value these are immutable

// //mutating
// //mutating the state we mean an alteration of the value of a variable or of the structure of an object.
// //like using var and let to define a variable

// //A mutable object is an object whose state can be modified after it is created. Immutables are the objects whose state cannot be changed once the object is created. Strings and Numbers are Immutable


// //3.NODE MODULES
// //before es6 
// // importing
// //It means include a library in a program so that use the function is defined in that library.
// //For this, use ‘require’ function in which pass the library name with its relative path
// //eg, const lib = require('./library') 

// //exporting
// //There is a special object in JavaScript called module.exports.
// //ll those functions that need to be exposed or need to be available so that it can used in some other file, defined in module.exports.



// //communicates with an external application on the basis of their related functionality


// // call() method
// //These methods also allow your objects to borrow methods from other objects and invoke
// //them as their own. This is an easy and powerful way to reuse code.