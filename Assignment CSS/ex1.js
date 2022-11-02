const iPhone11 = {
    name: "iPhone 11",
    manufacturer: "Apple",
    price: 699,
    specs: {
        color: "White",
        memory: {
            value: 128,
            unit: "MB",
        },
        cameras: {
            front: "12 MP Wide",
            rear: "12 MP Ultra Wide",
        },
        availableColors: ["Black", "Green", "Yellow", "Purple", "Red", "White"],
    },
    calculateDiscoutedPrice: function (percentage) {
        return (this.price * (100 - percentage)) / 100;
    }
}
// create the variables using destructuring - the variables should have values as shown below. 
// destructure here... 
const {
    name,
    manufacturer : brand,
    specs: {
        memory: {
            value : ram,
        },
        cameras: {
            rear : rearCamera
        },
        availableColors: [, secondColor]
    },


} = iPhone11;

console.log(name, brand, ram, rearCamera, secondColor);
let total=0;
const sum =(...z)=>z.reduce((total,i)=>total+i,0);

console.log(sum(1,2,3,45));
const num1=[1,2,3],num2 = [4,5,6];
const newArray = [...num1,...num2]
console.log(newArray);