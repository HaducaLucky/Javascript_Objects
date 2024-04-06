//! object = A collection of related properties and/or methods
//?          Can repreents real world objects (people, products, places)
//*          object = {key:value,
//*                    function()}

const person1 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployee: true,
    sayHello: function(){console.log("Hi! I am Spongebob")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 42,
    isEmployee: false,
    // sayHello: function(){console.log("Hey, I'm Patrick...")},
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I am eating pizza"),
}

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployee);
person1.sayHello();
person1.eat();

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployee);
person2.sayHello();
person2.eat();