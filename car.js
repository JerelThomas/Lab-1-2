const prompt = require ("prompt-sync")();

const name =prompt("Hi, what's your name ? ");

console.log(`Welcome to our show, ${name}`)

const age = parseInt( prompt("How old are you?"));

if(age < 22)
{
    console.log(` Mr ${name} you are too young, have a great day. Good Bye!! `)
    return
}

const younger = age - 2

console.log(`Hmmmm, you don’t look a day over ${younger}.`)
 
const cars =prompt(`Tell me, Mr ${name}, how many cars do you own? `);

if(cars >= 1)
{
    const car =prompt(`Mr ${name}, what is the brand and model of your car? `);

    console.log(` The ${car} is a great choice for a car.`)

    console.log(`Ok then Mr ${name}, have a great day. Good Bye!! `)

    
}
else
{
    console.log(`Wow, come on now Mr ${name}, you are ${age} and do not own a car!`)
    console.log(`Ok then Mr ${name}, have a great day. Good Bye!! `)
}
//*If he has no car

