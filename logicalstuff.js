const prompt = require ("prompt-sync")();
/*
const age =parseInt( prompt("enter your age "));

if(age <= 18)
{
    console.log(`you are too young to go beyond this point`)
}
 else{console.log(`you have been granted access`)} */
 

 const age =parseInt( prompt("enter your age "));

age <= 18 ? console.log(`you are too young to go beyond this point`) : console.log(`you have been granted access`)
