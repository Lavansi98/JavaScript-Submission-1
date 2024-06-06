const Person ={
    greet : "hello",
    name : "John",
    age : 26
}
const createPerson = Person.greet + ", "+ "my name is"+" "+ Person.name + " "+ "and I am"+" "+ Person.age +" "+"years old.";
console.log(createPerson);