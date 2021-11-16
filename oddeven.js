const prompt = require ("prompt-sync")();

const number = parseInt( prompt("enter a number "));

const div = number/2

if(number  % 2 == 0) 
    {
        console.log(`your number is even`)
     }
    
     else
     {
        console.log(`your number is odd`)
     }
