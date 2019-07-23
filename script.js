"use strict";

function fib(n){
    if(n <= 0){
        return  0;
    }
    else if(n == 1){
        return 1;
    }else{
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));

let num;

let i = 2;

function f(x,n){
    if(n != 1){
        return num = f(x,n-1) / i;
    }else{
        return x;
    }
}
f(1000,6);
console.log(num);

