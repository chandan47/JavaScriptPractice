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


