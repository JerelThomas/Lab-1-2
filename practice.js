const prompt = require ("prompt-sync")();

/* 
//*Number 3
const Pie = parseInt( 3.14 );

const radius= parseInt(   prompt("enter a Radius ")   );

const radius_squared = radius * radius;

const area_circle = Pie * radius_squared;

const circum = 2 * Pie * radius

console.log(`hey the area of the circle is ${area_circle} and the circumfrence of the circle is ${circum} `)
 */

/*
//* Number 5
const lenght = parseInt(   prompt("enter a lenght ")   );

const width = parseInt(   prompt("enter a width")   );

const area_rec = lenght * width ;

const perimeter_rec = lenght * 2 + width * 2 ;

console.log(`hey the area of the rectangle is ${area_rec} and the perimeter of the rectangle is ${perimeter_rec}`)

*/

/*

//*Number 7 

const hourly_pay = parseInt(   prompt("enter hourly pay ")   );



const hours_worked =parseInt(   prompt("enter hours worked ")   );

const net_sal = (hourly_pay * hours_worked * 7);

const gross_sal =(hourly_pay * hours_worked * 7);

const tax_gross = 25 / 100 * gross_sal

const gross_real = gross_sal - tax_gross

console.log(`hey your gross salerey is $${gross_real} and your net salery is $${net_sal} `)

*/

/*
//* Number 9

const fixed_salary= parseInt(   2500  );

const total_sales =parseInt(   prompt("enter total sales for month ")   );

const salary_plus1 =total_sales * 20/100;

const salary_plus2 =fixed_salary + salary_plus1; //* gross

const taxes = 25 /100 * fixed_salary

const net_sal = salary_plus2 - taxes


console.log(`hey net salary is ${net_sal} and gross sallary is ${salary_plus2} `)

*/

/*
//*number 11

const price_item = parseInt(   prompt("enter a price of an item ")   );

const item_num = parseInt(   prompt("enter item number ")   );

const item_name = parseInt(   prompt("enter Item Name")   );

const discount = parseInt(   prompt("enter discount amount ")   );

const discounted_amount = discount / 100 * price_item ;

const discount_plus_price = price_item - (discount / 100 * price_item) ;

console.log(`hey the original price of this item is ${price_item} the amount discounted was ${discounted_amount} and the amount to pay is ${discount_plus_price} `)

*/

/*
//*number 13

const name =  prompt("enter a name ");

const weight_kilo = parseInt(   prompt("enter your weigth ")   );

const weight_pounds = weight_kilo * 2.2 ;

console.log(`hey ${name} your weight in pounds is ${weight_pounds} `)

*/







/*

const Loan_Amount  =parseInt( prompt("enter your Loan Amount "));

const Annual_Interest_Rate=parseInt( prompt("enter your Annual Interest Rate"));

const Loan_term_years=parseInt( prompt("enter your Loan term"));

const number_of_payments_on_loan = Loan_term_years *12;

const monthly_interest  = ((Annual_Interest_Rate/100) / 12);

const monthly_interest_2 = monthly_interest + 1 ;

const raise = Math.pow(monthly_interest_2 , -number_of_payments_on_loan);

const subtract= 1 - raise

const multiply = Loan_Amount * monthly_interest ;

const monthly_installments = multiply / subtract

console.log (`Loan Amount ${ Loan_Amount}
Annual Interest Rate ${ Annual_Interest_Rate}
Loan term ${ number_of_payments_on_loan}
Monthly Payments ${ monthly_installments}`);

*/