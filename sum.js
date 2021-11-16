const prompt = require ("prompt-sync")();

let name =  prompt("enter a name ");

let num1 = parseInt(   prompt("enter a number ")   );

let num2 =parseInt( prompt("enter a number ")  );

let sum = num1 + num2;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof sum);


console.log(`hey ${name} this number ${num1} and this number ${num2} sum is ${sum}`)