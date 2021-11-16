const prompt = require ("prompt-sync")();

 const number = parseInt( prompt("enter a number "));

 if(number < 0)
 {
    console.log(`your number is negative`)
 }

 else
 {
    console.log(`your number is positive`)
 }