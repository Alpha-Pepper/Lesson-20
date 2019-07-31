"use strict";

function fib(n){
    let a = 1, b = 1;
    for (let i = 3; i<= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(10));





function f(x){
    let num;
  for(let i = 0; x > 50; i++){
      num = i + 1,
      x = x / 2;
  }
  return num
}

console.log(f(1000));


