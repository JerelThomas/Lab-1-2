const prompt = require ("prompt-sync")();


//*number 16

const name =  prompt("Hi, what's your name ? ");

console.log (`Welcome to our show, ${name} `);

const age =parseInt( prompt("How old are you?"));

const looks =parseInt( prompt("Hmmmm, you don’t look a day over"));

const address =  prompt (`Tell me,${name} , where do you live ?`);
 
console.log (`Oh, I’ve heard ${address} is a lovely place `);