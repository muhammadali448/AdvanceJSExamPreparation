// function function_name() { 
//     // function body 
//  } 
// function_name()

//define a  function 
// function test() { 
//     console.log("function called") 
//  } 
//  //call the function 
//  test()

// function function_name() { 
//     //statements 
//     return value; 
//  }

// function retStr() { 
//     return "hello world!!!" 
//  }  
//  var val = retStr() 
//  console.log(val) 

// function add( n1,n2) { 
//     var sum = n1 + n2 
//     console.log("The sum of the values entered "+sum) 
//  } 
//  add(12,13) 

// function add(a, b = 1) { 
//     return a+b; 
//  } 
//  console.log(add(4, 3))

// function fun1(...params) { 
//     console.log(params.length); 
//  }  
//  fun1();  
//  fun1(5); 
//  fun1(5, 6, 7); 
// var res = function( [arguments] ) { ... } 

// var f = function(){ return "hello"} 
// console.log(f()) 

// var func = function(x,y){ return x*y }; 
// function product() { 
//    var result; 
//    result = func(10,20); 
//    console.log("The product : "+result) 
// } 
// product()

// var variablename = new Function(Arg1, Arg2..., "Function Body");

// var func = new Function("x", "y", "return x*y;"); 
// function product() { 
//    var result; 
//    result = func(10,20); 
//    console.log("The product : "+result)
// } 
// product()

// (function() { 
//     var msg = "Hello World" 
//     console.log(msg)
//  })()
// function factorial(num) { 
//     if(num<=0) { 
//        return 1; 
//     } else { 
//        return (num * factorial(num-1)  ) 
//     } 
//  } 
//  console.log(factorial(6)) 

// var foo = (x)=>10+x 
// console.log(foo(10)) 

// var msg = ()=> console.log("function invoked") 
 
//  msg() 

// var msg = ()=> { 
//     console.log("function invoked") 
//  } 
//  msg() 

// var msg = x=> { 
//     console.log(x) 
//  } 
//  msg(10)

// var disp = ()=>console.log("Hello World") 
// disp();

// hoist_function();  
// function hoist_function() { 
//    console.log("foo"); 
// } 

// hoist_function(); // TypeError: hoist_function() is not a function  
// var hoist_function = function() { 
//    console.log("bar"); 
// };

// var main = function() { 
//     var loop = function() { 
//        for(var x = 0;x<5;x++) {
//           console.log(x); 
//        } 
//     }(); 
//     console.log("x can not be accessed outside the block scope x value is :"+x); 
//  } 
//  main();

// var main = function() { 
//     (function() { 
//        for(var x = 0;x<5;x++) { 
//           console.log(x); 
//        } 
//     })(); 
//     console.log("x can not be accessed outside the block scope x value is :"+x); 
//  } 
//  main();

// "use strict" 
// function* rainbow() { 
//    // the asterisk marks this as a generator 
//    yield 'red'; 
//    yield 'orange'; 
//    yield 'yellow'; 
//    yield 'green'; 
//    yield 'blue'; 
//    yield 'indigo'; 
//    yield 'violet'; 
// } 
// for(let color of rainbow()) { 
//    console.log(color); 
// } 

// function* ask() { 
//     const name = yield "What is your name?"; 
//     const sport = yield "What is your favorite sport?"; 
//     return `${name}'s favorite sport is ${sport}`; 
//  }  
//  const it = ask(); 
//  console.log(it.next()); 
//  console.log(it.next('Ethan'));  
//  console.log(it.next('Cricket')); 

