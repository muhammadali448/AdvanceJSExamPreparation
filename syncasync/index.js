// function foo(){}
// function bar(){
//   foo();
// }
// function baz(){
   
//   bar();
// }
// baz();
// function syncChores() {
//     console.log('Do the laundry');
//     console.log('wash the dog');
//     console.log('sort the recycling');
//   }
//   syncChores();
  /* Output appears in the same order it was written:
     Do the laundry
     wash the dog
     sort the recycling
  */
//  function doLaundry() {
//     startWashCycle();
//     switchToDryer();
//     foldAndIronClothes();
//   }
//   function washDog() {
//     // imagine some dog-washing code here
//   }
//   function sortRecycling() {
//     // and imagine some sorting code here
//   }
//   doLaundry();
//   // Now wait a full 80 minutes before completing other functions
//   // Now I can finally wash my dog!
//   washDog();
//   sortRecycling();

// function doLaundry(callback) {
//     // imagine initial code that kicks off wash cycle
//     // takes 80 minutes to complete wash cycle
//     callback(err, cleanLaundry);
//   }
//   doLaundry(function(err, cleanLaundry) {
//     // sometimes our washing machines break down
//     // better handle that possible error
//     if (err) throw err;
//     // if no errors, switch to dryer after wash is complete
//     // Tada! Our call back alerting us that washing is complete!
//     switchToDryer(cleanLaundry);
//   });
//   // as we wait, JavaScript will run this stuff now!
//   washDog();
//   // still time for more chores!
//   sortRecycling();
//   // the following will be undefined because it is not yet ready
//   console.log(cleanLaundry);
//   // Now the laundry is ready! 
//   // Let's go back and switch clothes to the dryer
//   // The clothes are drying. Let's continue doing more chores.
//   // Tanya will be impressed with my productivity!
//   balanceBudget();

// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }, 1000);

// console.log('I am a synchronous message');

// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }); // You can omit the 0

// console.log('Test 1');

// for (let i = 0; i < 10000; ++i) {
//     console.log('hit')
//     doSomeStuff();
// }

// console.log('Test 2');

// // The 'I am an asynchronous message' will be displayed when the main thread reach here

// function doSomeStuff() {
//     return 1 + 1;
// }

// let counter = 0;

// let timer = setInterval(function() {
//     console.log('I am an asynchronous message');

//     counter += 1;

//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log('I am a synchronous message');
// let fs = require('fs');
// fs.readFile('test.txt', 'utf8', function(error, data) {
//     if (error) {
//          throw error;
//     }
//     console.log("Asynchronous message. Content of test.txt:", data);
// });

// console.log('Synchronous message');



