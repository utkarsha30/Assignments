const sumArray =(array,operation)=>{
   let sum = 0;
   for(let i=0;i<array.length;i++){
        sum += operation(array[i]);
   }
   return sum;
}
const square=(a)=>a*a;
const cube = (a1) => a1*a1*a1;
console.log(sumArray([1,2,3],square));
console.log(sumArray([2,2,2],cube));