const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places':['bandorbon', 'saintmartin', 'kuakata']
}
// console.log(person);
// dot notation
// dot symbol diye object er property er value access kora
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation
// third bracket diye access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos);

// error
// console.log(person.'fav places');
console.log(person['fav places']);


// console.log();