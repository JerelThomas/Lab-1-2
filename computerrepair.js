const prompt = require ("prompt-sync")();
/*

const hour= parseInt( prompt("how long it took: "));

const parts= parseInt( prompt("cost of parts: "));

const charge= (100*hour) + parts;

if(charge < 150)
{
    console.log(`this job does not meet the minimum requierment of $150`)
}
else
{
    console.log(`this will cost $${charge}`)
}

*/

/*
const hour= parseInt( prompt("how long it took: "));

const parts= parseInt( prompt("cost of parts: "));

const charge= (100*hour) + parts;

if(charge < 150)
    {
        console.log(`this job does not meet the minimum requierment of $150`)
    }

console.log(`this will cost $${charge}`)
*/
const hour= parseInt( prompt("how long it took: "));

const parts= parseInt( prompt("cost of parts: "));

const charge= (100*hour) + parts;

charge < 150 ? console.log(`this job does not meet the minimum requierment of $150`) : console.log(`this will cost $${charge}`)
    
    
        



    
