// console.log('Connected');
// x = 5; // Assign 5 to x
// console.log('x before declaration', x)
// var x; // Declare x

// var x; // Declare x
// x = 5; // Assign 5 to x
// console.log('x after declaration', x);

// var x = 5; // Initialize x
// var y = 7; // Initialize y
// console.log(x + " " + y)

// var x = 5; // Initialize x
 
// console.log(x + " " + y)

// var y = 7; // Initialize y

// var x = 5; // Initialize x
// var y;     // Declare y
// console.log(x + " " + y)
// y = 7;    // Assign 7 to y

// console.log(typeof variable); // O
// console.log(variable); // Output: ReferenceError: variable is not defined

// function hoist() {
//     a = 20;
//     var b = 100;
//   }
  
//   hoist();
  
//   console.log(a);  // 20
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
//   console.log(b); 
//   console.log(typeof b);
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */

//  console.log(hoist); // Output: undefined

//  var hoist = 'The variable has been hoisted.';

// function hoist() {
//     console.log(message);
//     var message='Hoisting is all the rage!'
//   }
// //   console.log(message)
//   hoist();

//   function hoist() {
//     var message='Hoisting is all the rage!'
//     return (message);
//   }
  
//   console.log(hoist()); // Ouput: Hoisting is all the rage!

// 'use strict';

// console.log(hoist); // Output: ReferenceError: hoist is not defined
// hoist = 'Hoisted'; 

// console.log(hoist); // Output: ReferenceError: hoist is not defined ...
// let hoist = 'The variable has been hoisted.';

// let hoist;

// console.log(hoist); // Output: undefined
// hoist = 'Hoisted'

// const PI = 3.142;

// PI = 22/7; // Let's reassign the value of PI

// console.log(PI); // Output: TypeError: Assignment to constant variable.

// console.log(hoist); // Output: ReferenceError: hoist is not defined
// const hoist = 'The variable has been hoisted.';

// function getCircumference(radius) {
//     console.log(circumference)
//     circumference = PI*radius*2;
//     const PI = 22/7;
//   }
  
//   getCircumference(2) // ReferenceError: circumference is not defined

// const PI;
// console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration
// PI=3.142;

// hoisted(); // Output: "This function has been hoisted."

// function hoisted() {
//   console.log('This function has been hoisted.');
// };

// expression(); //Output: "TypeError: expression is not a function

// var expression = function() {
//   console.log('Will this work?');
// };

// expression(); // Ouput: TypeError: expression is not a function
// // hoisting();
// var expression = function hoisting() {
//   console.log('Will this work?');
// };

// var double = 22;

// function double(num) {
//   return (num*2);
// }

// console.log(typeof double); // Output: number

// var double;

// function double(num) {
//   return (num*2);
// }

// console.log(typeof double); // Output: function

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;
// console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

// class Hobbit {
//   constructor(height, weight) {
//     this.height = height;
//     this.weight = weight;
//   }
// }

// class Hobbit {
//     constructor(height, weight) {
//       this.height = height;
//       this.weight = weight;
//     }
//   }
  
//   var Frodo = new Hobbit();
//   Frodo.height = 100;
//   Frodo.weight = 300;
//   console.log(Frodo); // Output: { height: 100, weight: 300 }

// var Square = new Polygon();
// Square.height = 10;
// Square.width = 10;
// console.log(Square); // Output: TypeError: Polygon is not a constructor

// var Polygon = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// var Square = new Polygon();
// Square.height = 10;
// Square.width = 10;
// console.log(Square); // Output: TypeError: Polygon is not a constructor


// var Polygon = class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// var Polygon = class Polygon {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
  
//   var Square = new Polygon();
//   Square.height = 10;
//   Square.width = 10;
//   console.log(Square);

// function cowSays(sound){
//     console.log(sound);
//   }
//   cowSays('moo');

// cowSays('moo');
// function cowSays(sound){
//   console.log(sound);
// }

// var a = 3;
// console.log(a);

// a = 3;
// console.log(a);
// var a;

// console.log(a);
// var a = 3;

// var a;
// console.log(a);
// a = 3;

// console.log(shape);
// var shape = "square";
// // OUTPUT : "square"
// console.log(shape);

// function getShape(condition) {
//     // shape exists here with a value of undefined
//     // OUTPUT : undefined
//     console.log(shape);
//     if (condition) {
//         var shape = "square";
//         // some other code
//         return shape;
//     } else {
//         // shape exists here with a value of undefined
//         return false;
//     }
// }

// var shape = "square";

// let shape = "rectangle";

var shape = "square";
if (true) {
    // doesn't throw an error
    let shape = "rectangle";
    console.log('in block', shape);
    // more code 
}
console.log('outside', shape)

