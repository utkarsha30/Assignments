let sum = 0;
const sumArray =(array,operation)=>{
   for(let i=0;i<array.length;i++){
        sum += operation(array[i]);
   }
   return sum;
}
const square=(a)=>a*a;
const cube = (a1) => a1*a1*a1;
console.log(sumArray([1,2,3],square));
sum=0;
console.log(sumArray([2,2,2],cube));