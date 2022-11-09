const exponentFactory =(x) =>  {
    if(x===2)
        return square=(a)=>a*a;
    if(x===3)
        return cube = (a1) => a1*a1*a1;
    if(x===4)
        return defaultVal = (val) =>val;
}
let fn;
fn = exponentFactory(2);
console.log(fn(5));

fn = exponentFactory(3);
console.log(fn(5));

fn = exponentFactory(4);
console.log(fn(5));