const prompt = require ("prompt-sync")();

const kilog1 = parseInt( prompt("enter kilogram amount"));

const gram1 = parseInt( prompt("enter a gram amount "));

const kilog2 = parseInt( prompt("enter kilogram amount "));

const gram2 = parseInt( prompt("enter a gram amount "));

const kilototal= kilog1 + kilog2

const gramtotal= gram1 + gram2


if(gramtotal >=1000)
{
  const kiloadd= parseInt (gramtotal / 1000)

const newgram=  gramtotal - (kiloadd *1000) 
    
const newkilo= kilototal + kiloadd  

console.log(`your total weight is ${newkilo}Kg ${newgram}g`)
}
else
{
    console.log(`your total weight is ${kilototal}Kg ${gramtotal}g`)
}






