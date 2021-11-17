const prompt = require ("prompt-sync")();

const loan = parseInt( prompt("Enter loan amount: "));

if(loan < 25000)
{
    const deposit = loan * 5/100
    console.log(`You must deposit ${deposit}`)
}

else if(loan >= 25000 && loan <= 49999)
{
    const deposit = 1250+ (loan * 10/100)
    console.log(`You must deposit ${deposit}`)
}

else if(loan >= 50000 && loan <= 100000)
{
    const deposit = 5000+ (loan * 25/100)
    console.log(`You must deposit ${deposit}`)
}

else
{
    console.log(`Loan over $100,000 is not allowed, pleas take a loan between $25,000 and $100,000`)
    
}

