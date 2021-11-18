const prompt = require ("prompt-sync")();

const Numerator1 = parseInt( prompt("enter a Numerator "));

const Denomanator1 = parseInt( prompt("enter a Denomanator "));

const Numerator2 = parseInt( prompt("enter a Numerator "));

const Denomanator2 = parseInt( prompt("enter a Denomanator "));

const fraction_top1= Numerator1 * Denomanator2

const fraction_top2= Numerator2 * Denomanator1

const fraction_bottom= Denomanator1 * Denomanator2

const fraction_top_sum= fraction_top1 + fraction_top2

if(fraction_top_sum > fraction_bottom)
{
    const mixed_num= parseInt(fraction_top_sum / fraction_bottom)
    const fraction_mixed=  mixed_num * fraction_bottom
    const fraction_top_mixed= fraction_top_sum - fraction_mixed
    if(fraction_top_mixed === 0)
    {
        console.log(`The sum of the two fraction is ${mixed_num} `)
        return
    }
    console.log(`The sum of the two fraction is ${mixed_num} ${fraction_top_mixed}/${fraction_bottom}`)
    return
}


console.log(`The sum of the two fraction is ${fraction_top_sum}/${fraction_bottom}`)