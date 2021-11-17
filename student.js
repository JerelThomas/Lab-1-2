const prompt = require ("prompt-sync")();

const name = prompt("enter student name ");

const number = parseInt( prompt("enter student number "));

const score = parseInt( prompt("enter student score"));

if(score < 60)
{
    console.log(`${name} got a F`)
}

else if(score ===60 || score <= 69.9)
{
    console.log(`${name} got a D`)
}

else if(score ===70 || score <= 79.9)
{
    console.log(`${name} got a C`)
}

else if(score ===80 || score <= 89.9)
{
    console.log(`${name} got a B`)
}

else if(score >90 || score <= 100)
{
    console.log(`${name} got a A`)
}

else
{
    console.log(`This test was out of 100, please enter acurate score`)
}



