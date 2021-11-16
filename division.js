const prompt = require ("prompt-sync")();

const num1 =parseInt( prompt("enter first number: "));

const num2 =parseInt( prompt("enter second number: "));

const div = num1 / num2

if(num2===0)
{
    console.log(`you cannot divide by zero :) `)
}

else
{
    console.log(`${div}`)
}