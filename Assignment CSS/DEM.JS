/*class Movie {
    constructor(name, cast, yearOfRelease, boxOfficeCollection) {
        this.name = name;
        this.boxOfficeCollection = boxOfficeCollection;
        this.yearOfRelease = yearOfRelease;
        this.cast = cast;
    }


    addToCast(value) {
        this.cast.push(value);
    }

    addToCollection( amt ) {
        this.boxOfficeCollection.amt += amt;
    }
}
 class sequelMovie extends Movie{
    constructor(name, cast, yearOfRelease, boxOfficeCollection,earlierMovies){
        super(name, cast, yearOfRelease, boxOfficeCollection);
        this.earlierMovies = earlierMovies;
    }
    
    getLifeTimeEarnings(){
        let count=this.boxOfficeCollection;
        for(let i=0;i<this.earlierMovies.length;i++)
        {
            count += this.earlierMovies[i].boxOfficeCollection.amt;
        }
       return count;
       
    }
 }

const kantara = new Movie( 'Kantara', [ 'Rishabh', 'Sapthami' ], 2022, 100);
const X = new sequelMovie( 'XYZ', [ 'Rishabh' ],1000, 2022, [kantara] );

console.log(X);
console.log(X.getLifeTimeEarnings());*/
const persons = [
    {
        name: 'Bob',
        age: 32
    },
    {
        name: 'Aaron',
        age: 40
    },
    {
        name: 'Charlie',
        age: 35
    },
    {
        name: 'Dave',
        age: 18
    },
    {
        name: 'Daa',
        age: 60
    }
];


/*console.log(persons.filter(item => item.name[0] <= 'C'));
const names = persons.map(item =>item.name);*/

//persons.forEach(items=> items.age++);
console.log(persons.reduce((acc,item)=>Math.max(acc,item.age),0));


console.log(persons.reduce((acc,item)=>{
    if(item.age>acc)
        acc=item.age;
    return acc;
},0));
