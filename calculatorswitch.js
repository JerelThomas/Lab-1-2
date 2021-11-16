const prompt = require ("prompt-sync")();

const number1 = parseInt( prompt("enter a number "));

const number2 = parseInt( prompt("enter a number "));

const solve =parseInt( prompt("Enter 1 for addition, 2 for subtraction , 3 multiplication , 4 for division  "));

switch(solve)
{

case 1: const sum= number1 + number2
        console.log(`The sum of the two numbers is ${sum}`)

break;

case 2: const subtraction= number1 - number2
        console.log(`The difference of the two numbers is ${subtraction}`)

break;

case 3:  const multiply= number1 * number2
        console.log(`The product of the two numbers is ${multiply}`)
    
break;

case 4: 
        if(solve===4 && number2!==0)
            {
                
            }
            else if(solve===4 && number2===0)
            {
                console.log(`You can not divid by Zero`) 

            }
break;

default:{console.log(` please select one of the number provided to use program `)}

break;


}


