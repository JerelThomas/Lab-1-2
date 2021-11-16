const prompt = require ("prompt-sync")();

const mark1 =parseInt( prompt("enter first mark: "));

const mark2 =parseInt( prompt("enter second mark: "));

const mark3 =parseInt( prompt("enter third mark: "));

const average= (mark1+mark2+mark3) / 3

if(average>=50)
{
    console.log(`you got ${average} congrates`)
}
else
{
    console.log(`you failed your score was ${average} `)
}

