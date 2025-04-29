"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        return this.name;
    }
}
const individual = new Person(1, 'Lucas', 25);
individual.greet();
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmI() {
        console.log(`I am an employee. My name is ${this.name}.`);
        return this.name;
    }
}
