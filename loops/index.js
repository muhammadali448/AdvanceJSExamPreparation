// for (initial_count_value; termination-condition; step) { 
//     //statements
//  }  

// var num = 5 
// var factorial = 1; 
// for( let i = num ; i >= 1; i-- ) { 
//    factorial *= i ; 
// } 
// console.log(factorial);

// "use strict" 
// for(let temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp) 
// console.log(j);

// for (variablename in object) {  
//     statement or block to execute  
//  }

// var obj = {a:1, b:2, c:3};  
// for (var prop in obj) { 
//    console.log(obj[prop]); 
// }

// for (variablename of object) {  
//     statement or block to execute  
//  }

// for (let val of[12 , 13 , 123]) {   
//     console.log(val) 
//  } 

// while (expression) {  
//     Statement(s) to be executed if expression is true  
//  }

// var num = 5; 
// var factorial = 1; 

// while(num >= 1) { 
//    factorial = factorial * num; 
//    num--; 
// } 
// console.log("The factorial  is "+factorial); 

// do {  
//     Statement(s) to be executed;  
//  } 
//  while (expression);

// var n = 10;   
// do { 
//    console.log(n); 
//    n--; 
// } 
// while(n>=0)

// var n = 10; 
// do { 
//    console.log(n); 
//    n--; 
// }
// while(n>=0);

// var n = 10; 
// while(n>=0) { 
//    console.log(n); 
//    n--; 
// }

// var i = 1 
// while(i<= 10) { 
//    if (i % 5 == 0) {   
//       console.log("The first multiple of 5  between 1 and 10 is : "+i) 
//       break     //exit the loop if the first multiple is found 
//    } 
//    i++ 
// }

// var num = 0 
// var count = 0; 
// for(num = 0;num<= 20;num++) { 
//    if (num % 2 == 0) { 
//       continue 
//    } 
//    count++ 
// } 
// console.log(" The count of odd values between 0 and 20 is: "+count) 

// outerloop: // This is the label name  
// for (var i = 0; i < 5; i++) {  
//    console.log("Outerloop: " + i);  
//    innerloop:  
   
//    for (var j = 0; j<5; j++) {  
//       if (j>3 ) break; 
      
//       // Quit the innermost loop  
//       if (i == 2) break innerloop; 
      
//       // Do the same thing  
//       if (i == 4) break outerloop; // Quit the outer loop  
//       console.log("Innerloop: " + j);  
//    }  
// }

// outerloop: // This is the label name  
// for (var i = 0; i < 3; i++) {  
//    console.log("Outerloop: " + i);  
   
//    for (var j = 0; j < 5; j++) {  
//       if (j == 3){  
//          continue outerloop;  
//       }  
//       console.log("Innerloop: " + j );  
//    }  
// } 


