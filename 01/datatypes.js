let x = "xvz";
let y = 1234;
console.log(typeof x);
console.log(typeof y);
function sum(...args)
{
    return args.reduce((curr,acc)=>curr+acc);
}
console.log("=========================================")
console.log(sum(3,6,7,8,9));

console.log(sum.toString())


function createGreeter(timeOfDay)
{
    function greet(name)
    {
        console.log(`Good ${timeOfDay}!  ${name}`)
    } 
    return greet
}

let g1 = createGreeter('Morning')
let g2 = createGreeter('Afternnon')
let g3 = createGreeter('Evevning')

g1('Chandan')
g2('xyz')
g3('morgan')